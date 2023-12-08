import React, { Fragment, useState } from 'react'
import { MDBBtn, MDBCardText, MDBIcon, MDBModal, MDBModalBody, MDBModalContent, MDBModalDialog, MDBModalFooter, MDBModalHeader, MDBModalTitle } from 'mdb-react-ui-kit'

const MenuDisplay = () => {
    const categories = ["Chinese", "Indian", "Italian", ""]
    const [basicModal, setBasicModal] = useState(false)

    const toggleOpen = () => setBasicModal(!basicModal)

    return (
        <Fragment>
            <div className="d-flex justify-content-between align-items-center mb-1">
                <MDBCardText className="lead fw-normal mb-0">Menu</MDBCardText>
                <MDBCardText className="mb-0 text-primary" role="button" onClick={toggleOpen}><MDBIcon fas icon="plus" className="me-2" />Add Item</MDBCardText>
            </div>
            <MDBModal open={basicModal} setOpen={setBasicModal} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Modal title</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
                        </MDBModalHeader>
                        
                        <MDBModalBody>
                            Modal body text goes here.
                            <select class="form-select" aria-label="Select Category">
                                <option selected>Choose a category</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </MDBModalBody>

                        <MDBModalFooter>
                            <MDBBtn color='secondary' onClick={toggleOpen}>
                                Close
                            </MDBBtn>
                            <MDBBtn>Save changes</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </Fragment>
    )
}

export default MenuDisplay