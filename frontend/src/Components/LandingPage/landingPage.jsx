import React from 'react';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="hero-section">
        <img src="path/to/your/image.jpg" alt="Food Delivery" className="hero-image" />
        <div className="hero-text">
          <h1>Welcome to SafeDine Our Food Delivery Platform</h1>
          <p>
            Introducing our innovative food delivery platform that prioritizes transparency and customer safety – a unique service that sets us apart in the industry. Our website goes beyond just delivering delicious meals; it empowers customers to make informed choices by providing comprehensive health violation details for each restaurant listed. We understand the importance of knowing the hygiene standards of the establishments you order from, which is why we have integrated a feature that highlights any health violations reported at each restaurant. This commitment to transparency ensures that our customers can enjoy their favorite cuisines with confidence, knowing that they have access to crucial information about the hygiene practices of the eateries they choose. Elevate your dining experience with our food delivery website, where health and taste converge seamlessly.
          </p>
        </div>
      </div>
      {/* Add more sections, features, or images as needed */}
    </div>
  );
};

export default LandingPage;