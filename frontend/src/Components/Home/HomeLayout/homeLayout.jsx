import { useState, useEffect } from "react";
import { useMediaQuery } from 'react-responsive';
import axios from "axios";

import { SimpleGrid } from "@chakra-ui/react";
import { Badge, Center, Image, Card, Text, Heading, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

//Import Font Awesome Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const HomeLayout = ({ type }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    const [data, setData] = useState(null);
    //   const [loading, setLoading] = useState(true);
    const [selectedCard, setSelectedCard] = useState(null);

    const placeId = 'ChIJRzjLv3d644kRhkAHf0tdR2g';
    useEffect(() => {
        const fetchData = async (type) => {
            const endpoint = type === 'Dining' ? '/restaurantsList' : '/deliveryList';

            try {
                const host = process.env.REACT_APP_API_URL
                const response = await axios.get(
                    `${host}restaurant${endpoint}`
                );
                // console.log(response.data);
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                // setLoading(false);
            }
        };

        fetchData(type);
    }, [type]);


    const getPhoto = (photoReference) => {
        return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`;
    };

    const handleCardClick = (item) => {
        setSelectedCard(item.place_id);
    };

    return (
        <div>
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10} justifyItems="center">
                {data &&
                    data.map((item) => (
                        <Card
                            key={item.place_id}
                            p={2}
                            borderWidth="1px"
                            maxH="400px"
                            minW={{ base: '100%', sm: '300px', md: '200px', lg: '200px' }}
                            maxW={{ base: '100%', sm: '400px', md: '500px', lg: '500px' }}
                            overflow="hidden"
                            borderRadius="md"
                            width="100%"
                            borderColor={selectedCard === item.place_id ? 'blue.500' : 'gray.200'}
                            onClick={() => handleCardClick(item)}
                            cursor="pointer"
                            _hover={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}
                        >
                            <Link to={`/restaurant/${item.place_id}`} style={{width: "100%"}}>
                            {/* <CardHeader> */}
                            <CardBody>
                                <Center>
                                    <Image boxSize={isMobile ? '100px' : '200px'} objectFit='cover' width='100%' borderRadius="md" src={getPhoto(item.photos.photo_reference)} alt="" />
                                </Center>
                                <Heading noOfLines={2} size="md">{item.name}</Heading>
                                <span>
                                    <Badge variant='solid' colorScheme='green'>
                                        {item.rating} <FontAwesomeIcon icon={faStar} />
                                    </Badge>
                                    {/* &nbsp;
                                    <Badge variant='solid' colorScheme='red'>
                                        4.2 <FontAwesomeIcon icon={faStar} />
                                    </Badge> */}
                                </span>
                                {/* </CardHeader> */}

                                <Text noOfLines={2} mt={2} fontSize={{ base: 'md%', lg: 'l' }} mb="0">{item.address}</Text>
                            </CardBody>
                         </Link>
                        </Card>
                    ))}
            </SimpleGrid>
        </div>
    );
};

export default HomeLayout;
