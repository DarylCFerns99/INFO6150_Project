import React, { useEffect, useState, Fragment } from 'react'
import ReviewCard from '../ReviewCard/reviewCard'
import MapCard from '../MapCard/mapCard'
import OverviewDetails from '../OverviewDetails/overviewDetails'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Menu from '../../Menu/menu'
import { MDBBtn, MDBCardImage, MDBTextArea } from 'mdb-react-ui-kit'
import UserIcon from '../../../assets/user-solid.svg'
import { createComment } from '../../Home/TabOptions/service'
import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { getReviews } from '../../Profile/service'
import * as actions from '../../../redux/actions'



const TabOptions = ({googleRevs, openingHours, optionsData, phoneNumber, mapLink}) => {
    // console.log("lll "+openingHours+" "+optionsData)
    // console.log("phone number"+phoneNumber)
    const dispatch = useDispatch();
    const [comment, setComment] = useState('')
    const handleComment = (e) => setComment(e.target.value);
    const {restaurant_id} = useParams()
    const userReducer = useSelector(state => state.userReducer);
    const menuReducer = useSelector(state => state.menuReducer)
    const restaurantReducer = useSelector(state => state.restaurantReducer)

    const handlePostComment = async () => {
      const temp = {restaurant_id, user_id: userReducer._id, content: comment, rating: 0, author: userReducer.name}
      console.log(temp)

      await createComment(temp)
      .then(async res => {
        await handleFetchReviews()
        setComment('')
      })
      .catch(err => console.log(err))
    }

    const handleFetchReviews = async () => {
      await getReviews({restaurant_id})
          .then((res) => {
              dispatch(actions.handleGetReviews(res));       
          })
          .catch((err) => {
              console.log(err);
          });
    }

    useEffect(() => {
      handleFetchReviews()
    },[])

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
   
    <div>
           <Tabs mt="40px" colorScheme="red">
            <TabList>
            <Tab>Overview</Tab>
            <Tab>Menu</Tab>
            <Tab>Google Reviews</Tab>
            <Tab>User Reviews</Tab>
            <Tab>Contact</Tab>
            </TabList>

            <TabPanels>
            <TabPanel>
                <div style={{display : 'flex', justifyContent:"space-between"}}>
                <div style={{ flex:"2", marginRight:"40px" }}>
                    <OverviewDetails open={openingHours} options={optionsData}/>
                </div>
                 <div style={{flex:"1"}}> 
                    {/* Your component goes here */}
                    <MapCard phoneNumber={phoneNumber} mapLink={mapLink}/>
                </div>
                </div>
            </TabPanel>
            <TabPanel>
            <Menu iconFlag={restaurantReducer.delivery ? true : false} />
            </TabPanel>
            <TabPanel>
              {googleRevs && googleRevs.map((review) => (
                    <ReviewCard  author={review.author_name} content={review.text} rating={review.rating}/>
              ))}
          
            </TabPanel>
            <TabPanel>
            <div className="d-flex flex-start w-100">
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
          <MDBBtn onClick={handlePostComment} disabled={comment ? false : true} size="sm" className="me-1">
            Post comment
          </MDBBtn>
        </div>
        <div className='mt-5'>
        {menuReducer.reviewData.map((ele, idx) => (
          <Fragment>
            <CommentComponent {...ele}/>
            {ele.reply[0] && <CommentComponent author={ele.author} indent={true} createdAt={ele.updatedAt} content={ele.reply[0]} />}
          </Fragment>
            ))}
        </div>
            
            </TabPanel>
            <TabPanel>
            </TabPanel>
            </TabPanels>
              </Tabs> 
     </div> 

  )
}

export default TabOptions