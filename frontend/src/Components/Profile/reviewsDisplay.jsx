import React, { Fragment, useState, useEffect } from 'react'
import { MDBAccordion, MDBAccordionItem, MDBCardText } from 'mdb-react-ui-kit'
import ReviewCard from '../Restaurant/ReviewCard/reviewCardProfile'
import { useDispatch, useSelector } from 'react-redux';
import * as actions from "../../redux/actions"
import { getReviews } from './service';

const ReviewsDisplay = () => {
    const dispatch = useDispatch();
    const [reviews, setReviews] = useState([])
    const orderReducer = useSelector(state => state.orderReducer)
    const userReducer = useSelector(state => state.userReducer)
    const menuReducer = useSelector(state => state.menuReducer);

    const handleFetchReviews = async() => {
      //check for valid resto id in if loop 
      console.log("dsadasd",userReducer.isUser)
      await getReviews(!userReducer.isUser ? {restaurant_id : userReducer.restaurant_id} : {user_id : userReducer._id} )
          .then((res) => {
              dispatch(actions.handleGetReviews(res));       
          })
          .catch((err) => {
              console.log(err);
          });
  }

  useEffect(() => {
    if(menuReducer.reviewData){
      setReviews(menuReducer.reviewData)
    }
  }, [menuReducer.reviewData])

  useEffect(() => {
    if (userReducer != {}) {
      handleFetchReviews();
    }
  }, [userReducer]);
    return (
        <Fragment>
            <div className="d-flex justify-content-between align-items-center mb-1">
                <MDBCardText className="lead fw-normal mb-0">
                    {userReducer.isUser ? "My Reviews" : "Restaurant Reviews"}
                </MDBCardText>
            </div>
            {reviews.map((review, idx) => (
               <Fragment key={idx}>
                <ReviewCard {...review}  />
               </Fragment> 
                
            ))}         
        </Fragment>
    )
}

export default ReviewsDisplay