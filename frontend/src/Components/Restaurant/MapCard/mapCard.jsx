import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faDiamondTurnRight } from '@fortawesome/free-solid-svg-icons'
import { Card,  CardBody, CardFooter, Image, Stack, Heading, Text, Divider,
ButtonGroup, Button, Flex } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react';

const mapCard = () => {
    const location = {
        address: '1600 Amphitheatre Parkway, Mountain View, california.',
        lat: 37.42216,
        lng: -122.08427,
      }
    const mapUrl = "https://maps.google.com/?cid=6970511518661680907";
      const phoneNumber = '+918075031371'
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
                <Link href={mapUrl} isExternal>
                <Image
                src='https://staticmapmaker.com/img/google-placeholder.png'
                alt='Google map'
                borderRadius='lg'
                />
                </Link>
                <Stack mt='6' spacing='3'>
                <Text fonstSize='2xl' color='rgb(164, 164, 164)'>19 Perrin St, Boston</Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <Flex justifyContent="space-between">
                    <ButtonGroup spacing="2">
                    <Button variant="outline" colorScheme="grey">
                        <FontAwesomeIcon icon={faCopy} /> &nbsp;{' '}
                        <span style={{ color: 'black', fontWeight: '300' }}>Copy</span>
                    </Button>
                    <Button colorScheme="grey" variant="outline">
                        <FontAwesomeIcon icon={faDiamondTurnRight} style={{color : "#C53030"}}/> &nbsp;{' '}
                        <span style={{ color: 'black', fontWeight: '300' }}>Direction</span>
                    </Button>
                    </ButtonGroup>
                </Flex>
            </CardFooter>
            </Card>
    </div>
  )
}

export default mapCard
