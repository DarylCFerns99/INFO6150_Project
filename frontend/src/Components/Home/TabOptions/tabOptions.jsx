import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import HomeLayout from "../HomeLayout/homeLayout";

const TabOptions = () => {
    return (
        <div>
            <Tabs mt="80px" variant='soft-rounded' colorScheme="red">
                <TabList>
                    <Tab>Dining Out</Tab>
                    <Tab>Delivery</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <div>
                            <HomeLayout />
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div>
                            <HomeLayout />
                        </div>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    )
}

export default TabOptions
