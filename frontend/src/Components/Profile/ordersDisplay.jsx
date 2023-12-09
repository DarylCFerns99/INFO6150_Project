import React, { Fragment, useEffect, useState } from 'react'
import { MDBAccordion, MDBAccordionItem, MDBCardText, MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit'
import { capitalizeFirstLetter } from '../../Common/common';
import { getOrders } from './service'
import { useDispatch, useSelector } from 'react-redux';
import * as actions from "../../redux/actions"

const OrdersDisplay = ({ isUser }) => {

    const dispatch = useDispatch();
    const [orderId, setOrderId] = useState([])
    const orderReducer = useSelector(state => state.orderReducer)
    const userReducer = useSelector(state => state.userReducer)

    const handleFetchOrders = async() => {
      //check for valid resto id in if loop 
      console.log("dsadasd",userReducer.isUser)
      await getOrders(!userReducer.isUser ? {restaurant_id : userReducer.restaurant_id} : {user_id : userReducer._id} )
          .then((res) => {
              dispatch(actions.handleGetOrderDetails(res));       
          })
          .catch((err) => {
              console.log(err);
          });
  }

  useEffect(() => {
    if(orderReducer.data != {}){
      setOrderId(orderReducer?.data ?? [])
    }
  }, [orderReducer.data])

  useEffect(() => {
    if(userReducer != {}){
      handleFetchOrders()
    } 
  }, [userReducer]);

    return (
      <Fragment>
        <div className="d-flex justify-content-between align-items-center mb-1">
          <MDBCardText className="lead fw-normal mb-0">
            {isUser ? "Orders" : "Restaurant Orders"}
          </MDBCardText>
          {/* <MDBCardText className="mb-0"><a href="#!" className="text-muted">Show all</a></MDBCardText> */}
        </div>
        <MDBAccordion flush initialActive={1}>
          {orderId.map((order, idx) => (
            <MDBAccordionItem collapseId={idx} headerTitle={`Order #${order._id}`}>
                <MDBContainer>
                    {Object.keys(order?.menu_items_id ?? {}).map((item, index) => (
                      <MDBRow key={index}>
                      <MDBCol size='md'>
                          {capitalizeFirstLetter(JSON.parse(item).title)} x {order?.menu_items_id[item]}
                      </MDBCol>
                      <MDBCol  size='md'>
                          ${JSON.parse(item).price} 
                      </MDBCol>
                  </MDBRow>
                  ))}
                  <hr />
                  <MDBRow> 
                  <MDBCol> Tax (6.25%) :  </MDBCol>
                  <MDBCol> ${((order.total * 6.25)/100).toFixed(2)} </MDBCol>
                  </MDBRow>

                  <MDBRow> 
                  <MDBCol> Total (Tax Inclusive) : </MDBCol>
                  <MDBCol> ${order.total} </MDBCol>
                  </MDBRow>
                </MDBContainer>
            </MDBAccordionItem>
          ))}
        </MDBAccordion>
      </Fragment>
    );
}

export default OrdersDisplay