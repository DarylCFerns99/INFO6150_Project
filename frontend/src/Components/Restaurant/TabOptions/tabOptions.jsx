import React from 'react'
import ReviewCard from '../ReviewCard/reviewCard'
import MapCard from '../MapCard/mapCard'
import OverviewDetails from '../OverviewDetails/overviewDetails'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Menu from '../../Menu/menu'

const TabOptions = ({googleRevs, openingHours, optionsData, phoneNumber, mapLink}) => {
    console.log("lll "+openingHours+" "+optionsData)
    console.log("phone number"+phoneNumber)
  return (
   
    <div>
           <Tabs mt="40px" colorScheme="red">
            <TabList>
            <Tab>Overview</Tab>
            <Tab>Menu</Tab>
            <Tab>Google Reviews</Tab>
            <Tab>User Reviews</Tab>
            <Tab>Contact</Tab>
            </TabList>

            <TabPanels>
            <TabPanel>
                <div style={{display : 'flex', justifyContent:"space-between"}}>
                <div style={{ flex:"2", marginRight:"40px" }}>
                    <OverviewDetails open={openingHours} options={optionsData}/>
                </div>
                 <div style={{flex:"1"}}> 
                    {/* Your component goes here */}
                    <MapCard phoneNumber={phoneNumber} mapLink={mapLink}/>
                </div>
                </div>
            </TabPanel>
            <TabPanel>
            <Menu />
            </TabPanel>
            <TabPanel>
              {googleRevs && googleRevs.map((review) => (
                    <ReviewCard author={review.author_name} content={review.text} rating={review.rating}/>
              ))}
          
            </TabPanel>
            <TabPanel>
              <ReviewCard />
            </TabPanel>
            <TabPanel>
            </TabPanel>
            </TabPanels>
              </Tabs> 
     </div> 
  )
}

export default TabOptions