import React from 'react'
import {Card, Grid, GridItem, Text,  VStack } from '@chakra-ui/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck,faCircleXmark } from '@fortawesome/free-solid-svg-icons'

const openHours = [
        "Monday: Open 24 hours",
        "Tuesday: Open 24 hours",
        "Wednesday: Open 24 hours",
        "Thursday: Open 24 hours",
        "Friday: Open 24 hours",
        "Saturday: Open 24 hours",
        "Sunday: Open 24 hours"
      ];


const OverviewDetails = ({open, options}) => {
    // console.log(open);
    const { curbside_pickup, delivery, dine_in, takeout, reservable} = options;

  return (
    <div>
      <Card p="5">
      <Text fontSize='2xl' >
                    Options
                </Text>
        <div>
        <Grid templateColumns={['repeat(3, 1fr)', 'repeat(2, 1fr)']} gap={6}>
            {/* First Row */}
            <GridItem w='100%' h='10' bg='white'
             justifySelf={{
               base: 'center',   // Center the item horizontally on smaller screens
               md: 'space-between' // Move the item to opposite ends on medium screens and larger
             }} >
                {delivery ? (
                 <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'green' }} /> 
                 ) : (
                    <FontAwesomeIcon icon={faCircleXmark} style={{color : 'red'}} />
                 )} 
                &nbsp;         <span>Delivery</span>
            </GridItem>
            <GridItem w='100%' h='10' bg='white'
             justifySelf={{
               base: 'center',   // Center the item horizontally on smaller screens
               md: 'space-between' // Move the item to opposite ends on medium screens and larger
             }} >
                {dine_in ? (
                 <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'green' }} /> 
                 ) : (
                    <FontAwesomeIcon icon={faCircleXmark} style={{color : 'red'}} />
                 )} 
                &nbsp;         <span>Dine In</span>
            </GridItem>
            <GridItem w='100%' h='10' bg='white' 
             justifySelf={{
               base: 'center',   // Center the item horizontally on smaller screens
               md: 'space-between' // Move the item to opposite ends on medium screens and larger
             }}>
                    {takeout ? (
                 <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'green' }} /> 
                 ) : (
                    <FontAwesomeIcon icon={faCircleXmark} style={{color : 'red'}} />
                 )} 
                &nbsp;         <span>Take Out</span>
            </GridItem>

            {/* Second Row */}
            <GridItem w='100%' h='10' bg='white' 
             justifySelf={{
               base: 'center',   // Center the item horizontally on smaller screens
               md: 'space-between' // Move the item to opposite ends on medium screens and larger
             }}>
                  {reservable ? (
                 <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'green' }} /> 
                 ) : (
                    <FontAwesomeIcon icon={faCircleXmark} style={{color : 'red'}} />
                 )} 
                &nbsp;         <span>Reservable</span>
            </GridItem>
            <GridItem w='100%' h='10' bg='white' 
             justifySelf={{
               base: 'center',   // Center the item horizontally on smaller screens
               md: 'space-between' // Move the item to opposite ends on medium screens and larger
             }}>
               {curbside_pickup ? (
                 <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'green' }} /> 
                 ) : (
                    <FontAwesomeIcon icon={faCircleXmark} style={{color : 'red'}} />
                 )} 
                &nbsp;         <span>Curbside Pickup</span>
            </GridItem>
        </Grid>
        </div>
        <div style={{marginTop:"20px"}}>
        <Text fontSize='2xl' >
                    Hours Open
                </Text>

    <Grid
      templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
      gap={4}
      align="start"
    >
        {/* Display Monday to Thursday in the first column */}
        {open.slice(0, 4).map((hour, index) => (
            <Text key={index}>
            <span style={{ color: "green" }}>{hour.split(": ")[0]}</span>: {hour.split(": ")[1]}
            </Text>
        ))}

        {/* Display the remaining days in the second column */}
        {open.slice(4).map((hour, index) => (
            <Text key={index}>
            <span style={{ color: "green" }}>{hour.split(": ")[0]}</span>: {hour.split(": ")[1]}
            </Text>
        ))}
    </Grid>
        </div>
      </Card>
     
        <div></div>
    </div>
  )
}

export default OverviewDetails
