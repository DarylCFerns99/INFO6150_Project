import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare, faDiamondTurnRight } from '@fortawesome/free-solid-svg-icons'
import {
    Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider,
    ButtonGroup, Button, Flex
} from '@chakra-ui/react'
import { Link } from '@chakra-ui/react';

import { TwitterShareButton } from 'react-share'

const mapCard = ({ name, phoneNumber, mapLink, address, website }) => {
    // const location = {
    //     address: '1600 Amphitheatre Parkway, Mountain View, california.',
    //     lat: 37.42216,
    //     lng: -122.08427,
    // }
    const mapUrl = "https://maps.google.com/?cid=6970511518661680907";
    const shareUrl = `https://github.com`;
    const title = "Restaurant Name";

    console.log("phone number" + phoneNumber)
    return (
        <div>
            <Card maxW='sm'>
                <CardBody>
                    <Text fontSize='2xl' mb="0">
                        Call
                    </Text>
                    <Link href={`tel:${phoneNumber}`} aria-label={`Call ${phoneNumber}`} color="red" mb="10">
                        {phoneNumber}
                    </Link>
                    <Stack mt='6' spacing='3'>

                    </Stack>
                    <Link href={mapLink} isExternal>
                        <Image
                            src='https://staticmapmaker.com/img/google-placeholder.png'
                            alt='Google map'
                            borderRadius='lg'
                        />
                    </Link>
                    <Stack mt='6' spacing='3'>
                        <Text fonstSize='2xl' color='rgb(164, 164, 164)'>{address}</Text>
                        <Link color='teal.500' href={website} isExternal>
                            <Text fonstSize='2xl'>Website</Text>
                        </Link>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <Flex justifyContent="space-between">
                        <ButtonGroup spacing="2">
                            <Link href={mapLink} isExternal>
                                <Button colorScheme="grey" variant="outline">
                                    <FontAwesomeIcon icon={faDiamondTurnRight} style={{ color: "#C53030" }} /> &nbsp;{' '}
                                    <span style={{ color: 'black', fontWeight: '300' }}>Direction</span>
                                </Button>
                            </Link>

                            <TwitterShareButton
                                url={shareUrl}
                                title={name}
                            >
                                <Button variant="outline" colorScheme="grey">
                                    <FontAwesomeIcon icon={faShare} style={{ color: "#C53030" }} /> &nbsp;{' '}
                                    <span style={{ color: 'black', fontWeight: '300' }}>Share</span>
                                </Button>
                            </TwitterShareButton>
                        </ButtonGroup>
                    </Flex>
                </CardFooter>
            </Card>
        </div>
    )
}

export default mapCard
