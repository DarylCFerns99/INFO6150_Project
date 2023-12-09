import React, { Fragment, useEffect, useState } from 'react'
import { MDBBtn, MDBCardText, MDBIcon, MDBInput, MDBModal, MDBModalBody, MDBModalContent, MDBModalDialog, MDBModalFooter, MDBModalHeader, MDBModalTitle, MDBTextArea } from 'mdb-react-ui-kit'

import { checkIfLoading, checkObjectSome, convertImageToBase64 } from '../../Common/common'
import { addMenuItem } from './service'
import { customToastSystem } from '../../Common/customToastify'

import { useDispatch, useSelector } from 'react-redux'
import { capitalizeFirstLetter } from '../../Common/common'
import MenuCard from '../MenuCard/menuCard'


const MenuDisplay = () => {
    const categories = ["Appetizers", "Entrees", "Sides", "Chinese", "Indian", "Italian", "Desserts", "Beverages"]
    const defaultMenuData = {
        title: "",
        category: "",
        price: 0.0,
        description: "",
        image: "",
        restaurant_id: 2
    }
    const [loading, setLoading] = useState(false)
    const [basicModal, setBasicModal] = useState(false)
    const [menuData, setMenuData] = useState(defaultMenuData)

    const toggleOpen = () => setBasicModal(!basicModal)
    const handleSetMenuData = (e) => setMenuData(prev => ({...prev, [e.target.name]: e.target.value}))
    const handleFileUpload = async (e) => {
        const file = e.target.files?.[0]
        const base64 = await convertImageToBase64(file)
        setMenuData(prev => ({...prev, "image": base64}))
    }

    const handleAddMenuItem = async () => {
        setLoading(true)
        // await addMenuItem(menuData)
        //     .then(res => {
        //         customToastSystem(res?.data?.message, "success")
        //     })
        //     .catch(err => {
        //         customToastSystem(err?.message, "error")
        //     })
        // setLoading(false)
        console.log(menuData)
        toggleOpen()
    }

    //
    const menuReducer = useSelector(state => state.menuReducer);
    const dispatch = useDispatch();

    return (
        <Fragment>
            <div className="d-flex justify-content-between align-items-center mb-1">
                <MDBCardText className="lead fw-normal mb-0">Menu</MDBCardText>
                <MDBCardText className="mb-0 text-primary" role="button" onClick={toggleOpen}><MDBIcon fas icon="plus" className="me-2" />Add Item</MDBCardText>
            </div>
            <div>
            {Object.keys(menuReducer?.data["resto_id"] ?? {}).map((heading, idx) => (
                <div key={idx}>
                  <h2 id={heading}> {capitalizeFirstLetter(heading)} </h2>
                  {menuReducer?.data["resto_id"][heading].map((key, index) => (
                    <div key={`${idx}${index}`} className="hover-shadow">
                      <hr />
                      <MenuCard props={key} iconFlag={false} />
                      <hr />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <MDBModal open={basicModal} setOpen={setBasicModal} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Modal title</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
                        </MDBModalHeader>
                        
                        <MDBModalBody>
                            <select className="form-select mb-4" value={menuData.category} aria-label="Select Category" name="category" onChange={handleSetMenuData}>
                                <option selected>Choose a category</option>
                                {
                                    categories.map((option, idx) => (
                                        <option value={option} key={idx}>{option}</option>
                                    ))
                                }
                            </select>
                            <MDBInput wrapperClass={`mb-4`} label='Item Name*' id='title' name='title' type='text' value={menuData.title} onChange={handleSetMenuData} />
                            <MDBInput wrapperClass={`mb-4`} label='Item Price*' id='price' name='price' type='number' value={menuData.price} onChange={handleSetMenuData} />
                            <MDBTextArea wrapperClass={`mb-4`} label='Item Description*' id='description' name='description' row={2} col={2} value={menuData.description} onChange={handleSetMenuData} />
                            <MDBInput wrapperClass={`mb-4`} id='image' name='image' type='file' accept=".jpeg,.png,.jpg" onChange={handleFileUpload} />
                        </MDBModalBody>

                        <MDBModalFooter>
                            <MDBBtn color='secondary' onClick={toggleOpen}>
                                Close
                            </MDBBtn>
                            <MDBBtn onClick={handleAddMenuItem} disabled={loading || checkObjectSome(Object.values(menuData).map(ele => ele ? true : false), false)}>
                                {checkIfLoading(loading, "Create Item")}
                            </MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </Fragment>
    )
}

export default MenuDisplay