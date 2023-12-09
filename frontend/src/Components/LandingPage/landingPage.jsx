import React from 'react';
import { Grid, GridItem } from "@chakra-ui/react"
import { Flex, Box } from "@chakra-ui/react"
import bg from './landing.webp';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="hero-section" style={{marginTop:"20px"}}>
        <Flex>
          {/* Left side with 60% width */}
          <Box flex="0 0 60%">
            <div>
              <div className="hero-text">
                <h1>Welcome to SafeDine: Restaurant Safety Companion</h1>
                <p>
                  Introducing our innovative food delivery platform that prioritizes transparency and customer safety – a unique service that sets us apart in the industry. Our website goes beyond just delivering delicious meals; it empowers customers to make informed choices by providing comprehensive health violation details for each restaurant listed. We understand the importance of knowing the hygiene standards of the establishments you order from, which is why we have integrated a feature that highlights any health violations reported at each restaurant. This commitment to transparency ensures that our customers can enjoy their favorite cuisines with confidence, knowing that they have access to crucial information about the hygiene practices of the eateries they choose. Elevate your dining experience with our food delivery website, where health and taste converge seamlessly.
                </p>
              </div>
            </div>
          </Box>

          {/* Right side with 40% width */}
          <Box flex="0 0 40%">
            <div>
              <img src={bg} alt="Food Delivery" className="hero-image" style={{ borderRadius: '20%' }} />
            </div>
          </Box>
        </Flex>

      </div>
    </div>
  );
};

export default LandingPage;