import { useState, useEffect } from "react";
import axios from "axios";

import { SimpleGrid } from "@chakra-ui/react";
import { Card, Text, Heading, CardHeader, CardBody, CardFooter} from '@chakra-ui/react'
import {Link} from 'react-router-dom';

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
    const placeId = 'ChIJ0TLzuIZw44kRIEl-0avABUs';
    return (
        <div>
            <Link to={`/restaurant/${placeId}`}>Time</Link>
            <SimpleGrid columns={3} spacing={10}>
                {data &&
                    data.map((item) => (
                        <Card key={item.place_id} p={4} borderWidth="1px" borderRadius="md" maxW='sm'>
                            <CardHeader>
                                <Heading size="md">{item.name}</Heading>
                            </CardHeader>
                            <CardBody>
                                <Text mt={2} fontSize='xl' mb="0">{item.address}</Text>
                            </CardBody>
                        </Card>
                    ))}
            </SimpleGrid>
        </div>
    );
};

export default HomeLayout;
