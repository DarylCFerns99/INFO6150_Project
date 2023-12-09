import React, { Fragment, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarToggler, MDBIcon, MDBNavbarNav, MDBNavbarItem, MDBNavbarLink, MDBBtn, MDBCollapse, MDBDropdown, MDBDropdownToggle, MDBDropdownItem, MDBDropdownMenu } from 'mdb-react-ui-kit';

import * as actions from '../../redux/actions'

const Header = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()
    const userReducer = useSelector(state => state.userReducer)
    
    const routes = [
        {name: "Home", path: "/home"},
        {name: "About", path: "/about"},
        {name: "Contact", path: "/contact"}
    ]
    const [user, setUser] = useState({})
    const [openBasic, setOpenBasic] = useState(false)

    const handleLogout = () => {
        dispatch(actions.handleLogout())
        localStorage.clear()
        sessionStorage.clear()
        window.location.href = "/"
    }

    useEffect(() => {
        Object.keys(userReducer).length && setUser(userReducer)
    }, [userReducer])

    return (
        <MDBNavbar expand='sm' light bgColor='light'>
            <MDBContainer fluid>
                <MDBNavbarBrand href='/'>SafeDine</MDBNavbarBrand>

                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setOpenBasic(!openBasic)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar open={openBasic} className="container-fluid justify-content-between w-100">
                    <MDBNavbarNav className='ml-auto mb-2 mb-sm-0'>
                        {
                            routes.map((route, idx) => (
                                <MDBNavbarItem key={idx}>
                                    <MDBNavbarLink active={location.pathname.includes(route.path)} aria-current='page' href={route.path}>
                                        {route.name}
                                    </MDBNavbarLink>
                                </MDBNavbarItem>
                            ))
                        }
                    </MDBNavbarNav>

                    {/* {
                        location.pathname === '/home' &&
                        <MDBNavbarNav className='ml-auto mb-2 mb-sm-0 d-none d-md-flex'>
                            <MDBNavbarItem>
                                <form className='d-flex input-group w-auto'>
                                    <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
                                    <MDBBtn color='primary'>Search</MDBBtn>
                                </form>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    } */}
                    
                    <MDBNavbarNav className='ml-auto mb-2 mb-sm-0 d-flex justify-content-end'>
                        {
                            Object.keys(user).length
                            ? (
                                <MDBDropdown>
                                    <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                                            className="rounded-circle me-2"
                                            style={{width: "28px", verticalAlign: "bottom"}}
                                            alt="Avatar"
                                        />
                                        Welcome, {user?.name?.split(" ")?.[0] ?? undefined}
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu>
                                        <MDBDropdownItem link onClick={() => navigate("/profile")}>Profile</MDBDropdownItem>
                                        <MDBDropdownItem link onClick={handleLogout} className='bg-danger'><MDBIcon fas icon="sign-out-alt" className='text-white' /> <span className='text-white'>Logout</span></MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            )
                            : (
                                <Fragment>
                                    <MDBBtn outline color="success" className='me-2' type='button' onClick={() => navigate("/login")}>
                                        Login
                                    </MDBBtn>
                                    <MDBBtn outline color="secondary" size="sm" type='button' onClick={() => navigate("/register")}>
                                        Register
                                    </MDBBtn>
                                </Fragment>
                            )
                        }
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    )
}

export default Header