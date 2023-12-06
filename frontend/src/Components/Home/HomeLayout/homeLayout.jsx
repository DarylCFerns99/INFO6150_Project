import { useState, useEffect } from "react";
import axios from "axios";

import { SimpleGrid } from "@chakra-ui/react";
import { Center, Image, Card, Text, Heading, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

const HomeLayout = () => {
    const [data, setData] = useState(null);
    //   const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:8081/restaurant/restaurantsList"
                );
                // console.log(response.data);
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                // setLoading(false);
            }
        };

        fetchData();
    }, []);


    const getPhoto = (photoReference) => {
        return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`;
    };

    return (
        <div>
            <SimpleGrid columns={3} spacing={10}>
                {data &&
                    data.map((item) => (
                        <Card key={item.place_id} p={4} borderWidth="1px" borderRadius="md" maxW='sm'>
                            <CardHeader>
                                <Center>
                                    <Image boxSize='200px' objectFit='cover' width='100%' borderRadius="md" src={getPhoto(item.photos.photo_reference)} alt="" />
                                </Center>
                                <Heading size="md">{item.name}</Heading>
                            </CardHeader>
                            <CardBody>
                                <Text mt={2} fontSize='l' mb="0">{item.address}</Text>
                            </CardBody>
                        </Card>
                    ))}
            </SimpleGrid>
        </div>
    );
};

export default HomeLayout;
