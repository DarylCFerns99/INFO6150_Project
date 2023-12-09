import React, { Fragment, useState } from 'react'
import "./reviewCards.styles.css";
import { MDBAccordion, MDBAccordionItem, MDBCardText, MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTextArea, } from 'mdb-react-ui-kit'

import UserIcon from '../../../assets/user-solid.svg'
import { editComment } from './service';
import { getReviews } from '../../Profile/service';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../redux/actions'

const ReviewCard = (props) => {
  const {author, content, rating, createdAt, _id, reply, updatedAt} = props;
  const [showComment, setShowComment] = useState(false)
  const toggleComment = () => setShowComment(!showComment);
  const [comment, setComment] = useState('')
  const dispatch = useDispatch()
  const userReducer = useSelector(state => state.userReducer)

  const handlePostComment = async() => {
    let temp = {
      id : _id,
      reply : [comment],
    }
    await editComment(temp)
    .then(async res => {
      await getReviews(!userReducer.isUser ? {restaurant_id : userReducer.restaurant_id} : {user_id : userReducer._id} )
        .then((res) => {
            dispatch(actions.handleGetReviews(res));       
        })
        .catch((err) => {
            console.log(err);
        });
        toggleComment()
    })
    .catch(err => console.log(err))
  }

  const handleComment = (e) => setComment(e.target.value);

  const CommentComponent = (data) => (
    <Fragment>
      <div className={`d-flex flex-start align-items-center ${data.indent ? "ms-5" : undefined}`}>
          <MDBCardImage
            className="rounded-circle shadow-1-strong me-3"
            src={UserIcon}
            alt="avatar"
            width="60"
            height="60"
          />
          <div>
            <h6 className="fw-bold text-primary mb-1">{data.author}</h6>
            <p className="text-muted small mb-0">{data.createdAt.split("T")[0]}</p>
          </div>
        </div>

        <p className={`mt-3 ${data.indent ? "ms-5" : undefined}`}>
         {data.content}
        </p>
    </Fragment>
  )

  return (
    <MDBCard>
      <MDBCardBody>
        <CommentComponent author={author} content={content} createdAt={createdAt}/>

        {
          !reply[0] &&
        <div className="small d-flex justify-content-start">
          {/* <a href="#!" className="d-flex align-items-center me-3">
            <MDBIcon far icon="thumbs-up me-2" />
            <p className="mb-0">Like</p>
          </a> */}
            <a onClick={toggleComment} href="#!" className="d-flex align-items-center me-3">
              <MDBIcon far icon="comment-dots me-2" />
              <p className="mb-0">Comment</p>
            </a>
          {/* <a href="#!" className="d-flex align-items-center me-3">
            <MDBIcon fas icon="share me-2" />
            <p className="mb-0">Share</p>
          </a> */}
        </div>
        }

      </MDBCardBody>

      <MDBCardFooter
        className="py-3 border-0"
        style={{ backgroundColor: "#f8f9fa" }}
      >
      {
        reply[0] && <CommentComponent author={author} indent={true} content={reply[0]} createdAt={updatedAt}/>
      }
        {showComment && <Fragment> <div className="d-flex flex-start w-100">
          <MDBCardImage
            className="rounded-circle shadow-1-strong me-3"
            src={UserIcon}
            alt="avatar"
            width="40"
            height="40"
          />
          <MDBTextArea
          value={comment}
          onChange={handleComment}
            label="Message"
            id="textAreaExample"
            rows={4}
            style={{ backgroundColor: "#fff" }}
            wrapperClass="w-100"
          />
        </div>
        <div className="float-end mt-2 pt-1">
          <MDBBtn onClick={handlePostComment} size="sm" className="me-1">
            Post comment
          </MDBBtn>
          <MDBBtn onClick={toggleComment} outline size="sm">
            Cancel
          </MDBBtn>
        </div>
        </Fragment>}
      </MDBCardFooter>
    </MDBCard>
  );
}

export default ReviewCard