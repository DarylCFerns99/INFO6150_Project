import React, { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard/reviewCard';
import MapCard from '../MapCard/mapCard';
import OverviewDetails from '../OverviewDetails/overviewDetails';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Violations from '../Violations/violations'; // Adjust the path accordingly
import axios from 'axios'

const TabOptions = ({ googleRevs, openingHours, optionsData, phoneNumber, mapLink, licenseno, placeId }) => {
  const [violationsData, setViolationsData] = useState([]);
  const [loadingViolations, setLoadingViolations] = useState(true);

  useEffect(() => {
    // Simulating an API call for violations data
    const fetchViolationsData = async () => {
      try {
        // Make your API call here and set the violations data in the state
        // Example API call:
        // const response = await fetch('your_api_endpoint');
        // const data = await response.json();
        // setViolationsData(data);
         await axios.get(
          `http://localhost:8081/restaurant/${placeId}/violations`, {
            params : {
              license : licenseno
            }
          }
      ).then( response => {
        setViolationsData(response)
        setLoadingViolations(false);
      })

      
        ;
      } catch (error) {
        console.error('Error fetching violations data:', error);
      } finally {
        console.log("violationsData "+violationsData);
        
      }
    };

    // Fetch violations data when the component mounts
    if (loadingViolations) {
      fetchViolationsData();
    }
  }, [loadingViolations]);

  return (
    <div>
      <Tabs mt="40px" colorScheme="red">
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Menu</Tab>
          <Tab>Google Reviews</Tab>
          <Tab>User Reviews</Tab>
          <Tab>Violations</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ flex: '2', marginRight: '40px' }}>
                <OverviewDetails open={openingHours} options={optionsData} />
              </div>
              <div style={{ flex: '1' }}>
                <MapCard phoneNumber={phoneNumber} mapLink={mapLink} />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            {googleRevs &&
              googleRevs.map((review) => (
                <ReviewCard key={review.id} author={review.author_name} content={review.text} rating={review.rating} />
              ))}
          </TabPanel>
          <TabPanel>
            <ReviewCard />
          </TabPanel>
          <TabPanel>
            {loadingViolations ? (
              <p>Loading violations...</p>
            ) : (
              <Violations violationsData={violationsData.data} />
            )}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default TabOptions;