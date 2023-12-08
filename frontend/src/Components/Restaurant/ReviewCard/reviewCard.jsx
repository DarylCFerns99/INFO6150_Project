import React from 'react'
import "./reviewCards.styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faStar } from '@fortawesome/free-solid-svg-icons'
import { Button, Text, Badge} from '@chakra-ui/react'
const ReviewCard = ({author, content, rating}) => {

  return (
    <div>
      <div class="reviewCard">
        <div class="reviewHeader">
    
        <span style={{color:"black"}}> <Text fontSize='2xl' as="b">{author}</Text> &nbsp;
        <Badge colorScheme='red'>{rating} <FontAwesomeIcon icon={faStar} /></Badge>
        </span>
        </div>
        <div style={{paddingTop:"10px"}}>
            <p>
            {content}
            </p>
        </div>
      
      </div>
    </div>
  )
}

export default ReviewCard