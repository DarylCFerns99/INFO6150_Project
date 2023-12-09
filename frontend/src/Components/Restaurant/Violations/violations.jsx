import React, {useState} from 'react'
import "./violations.css"
import {
  Box,
  Text,
  Grid,
  GridItem
} from '@chakra-ui/react';
const Violations = ({violationsData}) => {
  const [accordion, setActiveAccordion] = useState(-1);
  function handleAccordion(index){
        setActiveAccordion(index)
  }
  return (
    <div>
    <div className="accordion__violation">
      {violationsData.map((getItem, index) => (
        <div key={index} onClick={()=>handleAccordion(index)}>
          <div className="accordion__violation-heading">
            <h3 className={accordion === index ? "active" : ""}>{getItem._id}</h3>
          </div>
          <div>
            <div className={accordion === index ? "active" : "inactive"}>
            {getItem.violdttm.map((item, innerIndex) => (
              <div key={innerIndex} >
             <Grid
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(3, 1fr)"
                gap={4}
                borderWidth="2px"
                borderColor="red"
                borderRadius="10px"
                p={4}
                mb={10}
            >
        {/* First Row with 3 columns */}
        <GridItem colSpan={1} rowSpan={1}  p={4}>
           <Text as='b'>Status : </Text> {item.status}
        </GridItem>
        <GridItem colSpan={1} rowSpan={1}  p={4}>
          <Text as='b'>Code : </Text> {item.code}
        </GridItem>
        <GridItem colSpan={1} rowSpan={1}  p={4}>
          <Text as='b'> Issue : </Text> {item.heading}
        </GridItem>

        {/* Second Row with 1 column */}
        <GridItem colSpan={3} rowSpan={1} p={4}>
          <Text as='b'>Description : </Text> {item.description}
        </GridItem>
      </Grid>
            
              </div>
            ))}
          </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  )
}

export default Violations
