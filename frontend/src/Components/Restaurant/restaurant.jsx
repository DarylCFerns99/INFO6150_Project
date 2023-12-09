import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ImageBanner from './ImageBanner/imageBanner'
import TabOptions from './TabOptions/tabOptions'
import { useDispatch } from 'react-redux'
//Import Chakra Components
import { Button, Text, Badge, Link, ChakraProvider } from '@chakra-ui/react'

//Import Font Awesome Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiamondTurnRight, faShare, faStar, faTruckMedical } from '@fortawesome/free-solid-svg-icons'

import { useSelector } from "react-redux";
import { handleSelectRestaurant } from '../../redux/actions'

const Restaurant = () => {
    const { restaurant_id } = useParams();
    const restaurant_data = useSelector(state => state.restaurantReducer);
    console.log("ddddddd" + restaurant_data);
    const { name, address, rating, reviews, opening_hours, map_link,
        curbside_pickup, delivery, dine_in, takeout, reservable, photos, phone_number, licenseno, website} = restaurant_data;
    const optionsData = { curbside_pickup, delivery, dine_in, takeout, reservable }
    const openingHours = opening_hours?.weekday_text;
    const photosReference = photos?.slice(0, 4).map(e => `https://maps.googleapis.com/maps/api/place/photo?maxwidth=600&photoreference=${e.photo_reference}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`);
    console.log(openingHours);
    const dispatch = useDispatch();
    const [restaurantData, setRestaurantData] = useState({});

    useEffect(() => {
        console.log("hii");
        const fetchData = async () => {
            try {
                const host = process.env.REACT_APP_API_URL
                const response = await axios.get(
                    `${host}restaurant/${restaurant_id}`
                );
                console.log(response.data);
                setRestaurantData(response?.data);
                dispatch(handleSelectRestaurant(response.data));

            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                console.log(restaurantData)
            }
        };

        fetchData();
    }, [restaurant_id]);
    console.log(restaurantData);
    const data = [
        { link: 'https://www.cnet.com/a/img/resize/69256d2623afcbaa911f08edc45fb2d3f6a8e172/hub/2023/02/03/afedd3ee-671d-4189-bf39-4f312248fb27/gettyimages-1042132904.jpg?auto=webp&fit=crop&height=675&width=1200' },
        { link: 'https://media.istockphoto.com/id/1457889029/photo/group-of-food-with-high-content-of-dietary-fiber-arranged-side-by-side.jpg?s=1024x1024&w=is&k=20&c=96MkVCuqUWOcMZ7vO5nG41rPufiSWlayTac_nsxXUTw=' },
        { link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Skadden_ny_jan.jpg/225px-Skadden_ny_jan.jpg' }
    ]
    const ImageBannerStyles = {
        height: '250px',
        margin: '40px auto'
    }
    // const restaurant = useSelector((state) => state.restaurantReducer.restaurants[0]);
    console.log("lll " + opening_hours + " " + optionsData)

    if (!restaurant_data.name ) {
        return <p>Restaurant data not available.</p>;
      }

    return (
        <ChakraProvider>
            <div>
                <div style={ImageBannerStyles} >
                    <ImageBanner images={photosReference} />
                </div>
                <div>

                </div>
                <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Text fontSize='4xl' mt="10px" mb="0px">{name}</Text>
                        <span>  <Badge variant='solid' colorScheme='green'>
                            {rating} <FontAwesomeIcon icon={faStar} />
                        </Badge> &nbsp; Google Review &nbsp; &nbsp;
                            <Badge variant='solid' colorScheme='green'>
                                4.5 <FontAwesomeIcon icon={faStar} />
                            </Badge> &nbsp; Safe Dine Review
                        </span>
                    </div>
                    <Text fontSize='2xl' color='rgb(164, 164, 164)'>{address}</Text>
                    <div style={{ height: "20px" }}>

                    </div>
                    <span>
                        <Link href={map_link} isExternal>
                            <Button colorScheme='red' variant='outline' >
                                <FontAwesomeIcon icon={faDiamondTurnRight} /> &nbsp; <span style={{ color: "black", fontWeight: "300" }}>Direction</span>
                            </Button>
                        </Link>
                        &nbsp; &nbsp;
                        <Button colorScheme='red' variant='outline'>
                            <FontAwesomeIcon icon={faShare} /> &nbsp; <span style={{ color: "black", fontWeight: "300" }}>Share</span>
                        </Button>
                    </span>
                </div>
                <TabOptions googleRevs={reviews} openingHours={openingHours} optionsData={optionsData} phoneNumber={phone_number} mapLink={map_link} licenseno={licenseno} placeId={restaurant_id} address={address} website={website}/>
                
            </div>
        </ChakraProvider>
    )
}

export default Restaurant
