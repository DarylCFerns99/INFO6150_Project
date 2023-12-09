import React from 'react'
import { useSelector } from 'react-redux'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCol, MDBContainer, MDBRow, MDBTypography } from 'mdb-react-ui-kit'

import UserIcon from '../../assets/user-solid.svg'
import OrdersDisplay from './ordersDisplay'
import ReviewsDisplay from './reviewsDisplay'

const Profile = () => {
    const userReducer = useSelector(state => state.userReducer)

    return (
        <div className="gradient-custom-2">
            <MDBContainer className="py-5 h-100">
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol lg="9" xl="7">
                        <MDBCard>
                            <div className="rounded-top text-white d-flex flex-row bg-primary">
                                <div className="ms-4 my-2 d-flex flex-column" style={{ width: '100px' }}>
                                    <MDBCardImage src={UserIcon}
                                        alt="Generic placeholder image" className="my-3 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                                    {/* <MDBBtn outline color="dark" style={{ height: '36px', overflow: 'visible' }}>
                                        Edit profile
                                    </MDBBtn> */}
                                </div>
                                <div className="ms-3 d-flex flex-column justify-content-center align-items-start">
                                    <MDBTypography tag="h3">{userReducer?.name}</MDBTypography>
                                    <MDBCardText tag="h5">{userReducer?.city}</MDBCardText>
                                </div>
                            </div>
                            <MDBCardBody className="text-black p-4">
                                {/* <div className="mb-5">
                                    <p className="lead fw-normal mb-1">About</p>
                                    <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                                        <MDBCardText className="font-italic mb-1">Web Developer</MDBCardText>
                                        <MDBCardText className="font-italic mb-1">Lives in New York</MDBCardText>
                                        <MDBCardText className="font-italic mb-0">Photographer</MDBCardText>
                                    </div>
                                </div> */}
                                {/* <div className="d-flex justify-content-between align-items-center mb-4">
                                    <MDBCardText className="lead fw-normal mb-0">Recent photos</MDBCardText>
                                    <MDBCardText className="mb-0"><a href="#!" className="text-muted">Show all</a></MDBCardText>
                                </div>
                                <MDBRow>
                                    <MDBCol className="mb-2">
                                        <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                                            alt="image 1" className="w-100 rounded-3" />
                                    </MDBCol>
                                    <MDBCol className="mb-2">
                                        <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                                            alt="image 1" className="w-100 rounded-3" />
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow className="g-2">
                                    <MDBCol className="mb-2">
                                        <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                                            alt="image 1" className="w-100 rounded-3" />
                                    </MDBCol>
                                    <MDBCol className="mb-2">
                                        <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                                            alt="image 1" className="w-100 rounded-3" />
                                    </MDBCol>
                                </MDBRow> */}
                                <OrdersDisplay />
                                <ReviewsDisplay />
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    )
}

export default Profile