import React, { useState } from 'react'
import bcrypt from 'bcryptjs'
import { useNavigate } from 'react-router'
import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBRow, MDBTypography } from 'mdb-react-ui-kit'
import { useDispatch } from 'react-redux'

import { handleRegister } from './registerService'

import * as actions from '../../redux/actions'
import { customToastSystem } from '../../Common/customToastify'
import { checkIfLoading, checkObjectEvery, setSessionStorage } from '../../Common/common'
import { defaultRegisterData, inputComponents, registerInputValidations, inputValidationsRegexp, validateFields } from '../../Common/defaultData'

const Register = ({ isUser=true }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)
    const [userData, setUserData] = useState(defaultRegisterData)
    const [validations, setValidations] = useState(registerInputValidations)

    const handleSetUserData = (e) => {
        let { name, value } = e.target
        if (name === 'confirmPassword') {
            setValidations(prev => ({...prev, [name]: userData["password"] !== value}))
        } else {
            setValidations(prev => ({...prev, [name]: validateFields(value, inputValidationsRegexp[name])}))
        }
        setUserData(prev => ({...prev, [name]: value}))
    }

    const handleInititateRegister = async () => {
        setLoading(true)
        let tempData = {
            ...userData,
            isUser
        }
        const salt = bcrypt.genSaltSync(10)
        let hash = bcrypt.hashSync(tempData["password"], salt)
        tempData["password"] = tempData["confirmPassword"] = hash
        await handleRegister(tempData)
            .then(res => {
                dispatch(actions.handleAddUserData(res?.data ?? {}))
                setSessionStorage("user", JSON.stringify(res?.data))
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
                        The best offer <br />
                        <span style={{ color: 'hsl(218, 81%, 75%)' }}>for your business</span>
                    </h1>
                    <p className='px-3' style={{ color: 'hsl(218, 81%, 85%)' }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                        quibusdam tempora at cupiditate quis eum maiores libero
                        veritatis? Dicta facilis sint aliquid ipsum atque?
                    </p>
                </MDBCol>
                <MDBCol md='6' className='position-relative'>
                    <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                    <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>
                    <MDBCard className='my-5 bg-glass'>
                        <MDBCardBody className='p-md-5 py-5 px-3'>
                            <MDBTypography variant='h3' className="mb-4 text-dark">{isUser ? "User" : "Restaurant"} Registration</MDBTypography>
                            {
                                Object.keys(defaultRegisterData ?? {}).map((ele, idx) => (
                                    inputComponents[ele]({ key: idx, onChange: (e) => handleSetUserData(e), value: userData?.[ele], valid: validations[ele] })
                                ))
                            }
                            <MDBBtn className='w-100 my-4' size='md' disabled={loading || !checkObjectEvery(Object.values(validations).map(ele => ele === undefined ? true : ele), false)} onClick={handleInititateRegister}>
                                {checkIfLoading(loading, "Register", "sm")}
                            </MDBBtn>
                            <div className="text-center">
                                {
                                    isUser
                                        ? (<p>Register as a restaurant owner? <span role="button" className='text-primary' onClick={() => navigate("/restaurantRegister")}>Register here</span></p>)
                                        : (<p>Register as a foodie? <span role="button" className='text-primary' onClick={() => navigate("/register")}>Register here</span></p>)
                                }
                            </div>
                            {/* <div className="text-center">
                                <p>or sign up with:</p>
                                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='facebook-f' size="sm" />
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='twitter' size="sm" />
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='google' size="sm" />
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='github' size="sm" />
                                </MDBBtn>
                            </div> */}
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default Register