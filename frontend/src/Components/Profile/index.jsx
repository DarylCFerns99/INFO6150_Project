import React, { Fragment, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCol, MDBContainer, MDBRow, MDBTabs, MDBTabsContent, MDBTabsItem, MDBTabsLink, MDBTabsPane } from 'mdb-react-ui-kit'

import UserIcon from '../../assets/user-solid.svg'
import OrdersDisplay from './ordersDisplay'
import ReviewsDisplay from './reviewsDisplay'
import MenuDisplay from './menuDisplay'

const Profile = () => {
    const userReducer = useSelector(state => state.userReducer)

    const [verticalActive, setVerticalActive] = useState('Personal Details');
    const [userData, setUserData] = useState({ name: "", email: "", phoneNumber: "", address1: "", address2: "", city: "", state: "", zipCode: "", isUser: true })
    
    const addressEnd = `${userData.city}, ${userData.state} ${userData.zipCode}`
    const createAddress = `${userData.address1}, ${userData.address2 && `${userData.address2},`} ${addressEnd}`

    let tabs = {
        'Personal Details': (<Fragment>
            <MDBRow>
                <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                    <MDBCardText className="text-muted">{userData.name}</MDBCardText>
                </MDBCol>
            </MDBRow>
            <hr />
            <MDBRow>
                <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                    <MDBCardText className="text-muted">{userData.email}</MDBCardText>
                </MDBCol>
            </MDBRow>
            <hr />
            <MDBRow>
                <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                    <MDBCardText className="text-muted">{userData.phoneNumber}</MDBCardText>
                </MDBCol>
            </MDBRow>
            <hr />
            <MDBRow>
                <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                    <MDBCardText className="text-muted">{addressEnd}</MDBCardText>
                </MDBCol>
            </MDBRow>
        </Fragment>),
        'Orders': (<OrdersDisplay {...userData} />),
        'My Reviews': (<ReviewsDisplay {...userData} />),
    }

    if (!userData.isUser) {
        tabs = {
            ...tabs,
            "Menu": <MenuDisplay />
        }
    }

    const handleVerticalClick = (value) => {
        if (value === verticalActive) {
        return;
        }

        setVerticalActive(value);
    };

    useEffect(() => {
        if (Object.keys(userReducer)) {
            setUserData({...userReducer})
        }
    }, [userReducer])

    return (
        <section className='h-100' style={{ backgroundColor: '#eee' }}>
            <MDBContainer className="py-5">
                <MDBRow>
                    <MDBCol lg="4">
                        <MDBCard className="mb-4">
                            <MDBCardBody className="text-center">
                                <MDBCardImage
                                    src={UserIcon}
                                    alt="avatar"
                                    className="rounded-circle"
                                    style={{ width: '150px' }}
                                    fluid
                                />
                                <p className="text-muted mt-4">{userReducer.name}</p>
                                <p className="text-muted mt-2">{createAddress}</p>
                                {/* <div className="d-flex justify-content-center mb-2">
                                    <MDBBtn>Follow</MDBBtn>
                                    <MDBBtn outline className="ms-1">Message</MDBBtn>
                                </div> */}
                            </MDBCardBody>
                        </MDBCard>
                        <MDBCard className="mb-4">
                            <MDBCardBody>
                                <MDBTabs className='flex-column text-center'>
                                    {
                                        Object.keys(tabs).map((tab, idx) => (
                                            <MDBTabsItem key={idx}>
                                                <MDBTabsLink onClick={() => handleVerticalClick(tab)} active={verticalActive === tab}>
                                                    {tab}
                                                </MDBTabsLink>
                                            </MDBTabsItem>
                                        ))
                                    }
                                </MDBTabs>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg="8">
                        <MDBTabsContent>
                            {
                                Object.keys(tabs).map((tab, idx) => (
                                    <MDBTabsPane open={verticalActive === tab} key={idx}>
                                        <MDBCard className="mb-4">
                                            <MDBCardBody>{tabs[tab]}</MDBCardBody>
                                        </MDBCard>
                                    </MDBTabsPane>
                                ))
                            }
                        </MDBTabsContent>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    )
}

export default Profile