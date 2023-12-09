import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { MDBBtn, MDBCard, MDBCardBody, MDBCheckbox, MDBCol, MDBContainer, MDBRow, MDBSpinner, MDBTypography } from 'mdb-react-ui-kit'

import { handleLogin } from './loginService'

import * as actions from '../../redux/actions'
import { customToastSystem } from '../../Common/customToastify'
import { checkIfLoading, checkObjectEvery, setLocalStorage, setSessionStorage } from '../../Common/common'
import { defaultLoginData, inputComponents, inputValidationsRegexp, loginInputValidations, validateFields } from '../../Common/defaultData'

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)
    const [userData, setUserData] = useState(defaultLoginData)
    const [remember, setRemember] = useState(false)
    const [validations, setValidations] = useState(loginInputValidations)

    const handleSetUserData = (e) => {
        let { name, value } = e.target
        setValidations(prev => ({...prev, [name]: validateFields(value, inputValidationsRegexp[name])}))
        setUserData(prev => ({...prev, [name]: value}))
    }
    const handleToggleRemember = () => setRemember(!remember)

    const handleInititateLogin = async () => {
        setLoading(true)
        await handleLogin(userData)
            .then(res => {
                dispatch(actions.handleAddUserData(res?.data ?? {}))
                setSessionStorage("user", JSON.stringify(res?.data))
                if (remember) {
                    setLocalStorage("user", JSON.stringify(res?.data))
                }
                customToastSystem(res?.message, "success")
                navigate("/home")
            })
            .catch(err => {
                customToastSystem(err?.message, "error")
            })
        setLoading(false)
    }

    return (
        <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden' style={{maxWidth: "1600px"}}>
            <MDBRow>
                <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
                    <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{ color: 'hsl(218, 81%, 95%)' }}>
                        Safe Dine <br />
                        <span style={{ color: 'hsl(218, 81%, 75%)' }}>Restaurant Safety Companion</span>
                    </h1>
                    <p className='px-3' style={{ color: 'hsl(218, 81%, 85%)' }}>
                    The goal of this webpage is to provide the user with the health code violations data of the restaurants. The web app will also contain menu for each restaurant 
                    which will allow users to add items to cart. There is also a User review section which allows users to post comments and restaurant owners to respond to these review. 
                    The web app is also integrated with Google Places API allowing users to access restaurant information such as dine-in, delivery options, open hours, directions etc.. .
                    </p>
                </MDBCol>
                <MDBCol md='6' className='position-relative d-flex flex-column justify-content-center'>
                    <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                    <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>
                    <MDBCard className='my-5 bg-glass mx-auto' style={{width: "min(100%, 600px)"}}>
                        <MDBCardBody className='p-md-5 py-5 px-3'>
                            <MDBTypography variant='h3' className="mb-4 text-dark">Login</MDBTypography>
                            {
                                Object.keys(defaultLoginData ?? {}).map(ele => (
                                    inputComponents[ele]({ onChange: handleSetUserData, value: userData?.[ele], valid: validations[ele] })
                                ))
                            }
                            <div className='d-flex justify-content-start mb-4'>
                                <MDBCheckbox name='rememberMe' value={remember} onChange={handleToggleRemember} id='rememberMe' label='Remember Me' />
                            </div>
                            <MDBBtn className='w-100' size='md' disabled={loading || !checkObjectEvery(Object.values(validations).map(ele => ele === undefined ? true : ele), false)} onClick={handleInititateLogin}>
                                {checkIfLoading(loading, "Login", "sm")}
                            </MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default Login