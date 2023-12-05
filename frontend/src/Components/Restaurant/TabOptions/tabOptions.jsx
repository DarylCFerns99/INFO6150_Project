import React from 'react'
import ReviewCard from '../ReviewCard/reviewCard'
import MapCard from '../MapCard/mapCard'
import OverviewDetails from '../OverviewDetails/overviewDetails'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const TabOptions = () => {
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
                    <OverviewDetails />
                </div>
                <div style={{flex:"1"}}>
                    {/* Your component goes here */}
                    <MapCard />
                </div>
                </div>
            </TabPanel>
            <TabPanel>
            <p>two!</p>
            </TabPanel>
            <TabPanel>
              <ReviewCard />
              <ReviewCard />
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