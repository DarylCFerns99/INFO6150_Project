import React from 'react'
import ImageBanner from './ImageBanner/imageBanner'
import TabOptions from './TabOptions/tabOptions'

//Import Chakra Components
import { Button, Text, Badge} from '@chakra-ui/react'

//Import Font Awesome Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDiamondTurnRight, faShare, faStar} from '@fortawesome/free-solid-svg-icons'


const Restaurant = () => {
    const data = [
        {link : 'https://www.cnet.com/a/img/resize/69256d2623afcbaa911f08edc45fb2d3f6a8e172/hub/2023/02/03/afedd3ee-671d-4189-bf39-4f312248fb27/gettyimages-1042132904.jpg?auto=webp&fit=crop&height=675&width=1200'},
        {link : 'https://media.istockphoto.com/id/1457889029/photo/group-of-food-with-high-content-of-dietary-fiber-arranged-side-by-side.jpg?s=1024x1024&w=is&k=20&c=96MkVCuqUWOcMZ7vO5nG41rPufiSWlayTac_nsxXUTw='}
      ]
    const ImageBannerStyles = {
        height : '250px',
        width : '600px',
        margin : '40px auto'
    }
  return (
    <div>
      <div style={ImageBannerStyles} >
       <ImageBanner images={data} />
     </div>
     <div>
        <div style={{display:"flex",justifyContent:"space-between", alignItems:"center"}}>
        <Text fontSize='4xl' mt="10px" mb="0px">Deja Restaurant</Text>
        <span>  <Badge variant='solid' colorScheme='green'>
                    4.5 <FontAwesomeIcon icon={faStar} />
                </Badge> &nbsp; Google Review &nbsp; &nbsp;
                <Badge variant='solid' colorScheme='green'>
                4.5 <FontAwesomeIcon icon={faStar} /> 
                </Badge> &nbsp; Safe Dine Review
        </span>
        </div>
        <Text fonstSize='2xl' color='rgb(164, 164, 164)'>19 Perrin St, Boston</Text>
        <div style={{height: "20px"}}>

        </div>
        <span>
        <Button colorScheme='red' variant='outline'>
            <FontAwesomeIcon icon={faDiamondTurnRight} /> &nbsp; <span style={{color:"black", fontWeight:"300"}}>Direction</span>
        </Button>
        &nbsp; &nbsp;
        <Button colorScheme='red' variant='outline'>
            <FontAwesomeIcon icon={faShare} /> &nbsp; <span style={{color:"black", fontWeight:"300"}}>Share</span>
        </Button>
        </span>
        </div>
        <TabOptions />
    </div>
  )
}

export default Restaurant
