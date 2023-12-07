import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import HomeLayout from "../HomeLayout/homeLayout";

const TabOptions = () => {
    return (
        <div>
            <Tabs mt="80px" variant='soft-rounded' colorScheme="red">
                <TabList justifyContent="center" style={{ marginBottom: "20px" }}>
                    <Tab>Dining Out</Tab>
                    <Tab>Delivery</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <div>
                            <HomeLayout type="Dining"/>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div>
                            <HomeLayout type="Delivery"/>
                        </div>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    )
}

export default TabOptions
