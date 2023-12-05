import React from 'react'
import "./reviewCards.styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faStar } from '@fortawesome/free-solid-svg-icons'
import { Button, Text, Badge} from '@chakra-ui/react'
const ReviewCard = () => {
  return (
    <div>
      <div class="reviewCard">
        <div class="reviewHeader">
        <span style={{color:"black"}}> <Text fontSize='2xl' as="b">Rishikesh</Text> &nbsp;
        <Badge colorScheme='red'>4.5 <FontAwesomeIcon icon={faStar} /></Badge>
        </span>
        <Button colorScheme='red' variant='outline'> Follow </Button>
        </div>
        <div style={{paddingTop:"10px"}}>
            <p>
            Deja Restaurant in Rishikesh provides an exceptional dining experience that seamlessly blends modern 
            elegance with traditional charm. From the inviting ambiance to the diverse menu, each aspect contributes to a 
            memorable culinary journey. The carefully crafted dishes, such as [mention specific dishes], showcase a 
            commitment to using fresh, high-quality ingredients. The staff's attentive and friendly service, coupled 
            with breathtaking views of [mention specific scenery], adds an extra layer of enjoyment to the overall 
            dining experience. Deja Restaurant is a standout destination for those seeking a delightful and authentic
             gastronomic adventure in Rishikesh.
            </p>
        </div>
        <div style={{paddingTop:"10px", paddingBottom:"10px"}}>
           <span><FontAwesomeIcon icon={faThumbsUp} />Like </span>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard