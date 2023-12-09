import React from 'react';
import { ChakraProvider, Box, SimpleGrid, Card, CardHeader, CardBody, CardFooter, Heading, Text, Button, Image, Link } from '@chakra-ui/react';
import AbhishekPhoto from './ProfPhotos/abhishek.jpg';
import AnirudhaPhoto from './ProfPhotos/anirudha.jpg';
import DarylPhoto from './ProfPhotos/daryl.jpg';
import JovinPhoto from './ProfPhotos/jovin.jpg';

const TeamMemberCard = ({ title, description, buttonText,photo, linkedIn }) => {
  return (
    <Card>
      <CardHeader>
        <Heading size='md'>{title}</Heading>
      </CardHeader>
      <CardBody>
      <Image
      src={photo}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
        <Text>{description}</Text>
      </CardBody>
      <CardFooter>
        <span>
        <Link color='teal.500' href={linkedIn} isExternal>LinkedIn</Link> 
        </span>
      </CardFooter>
    </Card>
  );
};

const About = () => {
  return (
    <ChakraProvider>
      <div className="about-us">
      <Heading as="h3" mb={4}>
          About us
        </Heading>
     <p>
      Safe Dine, your go-to food delivery app, redefines the dining experience by prioritizing both your satisfaction and safety. Our intuitive platform not only simplifies the process of selecting and adding items to your cart from a diverse range of restaurants but also empowers you with crucial insights into their compliance history. As you explore our curated selection, you can make informed choices, ensuring your culinary preferences align with establishments committed to maintaining the highest standards of safety and hygiene.

What sets Safe Dine apart is its unique feature that displays the compliance history of each restaurant, offering transparency into any past violations. This added layer of information allows you to make decisions that prioritize both your cravings and your well-being. Safe Dine is more than just a food delivery app; it's your companion in crafting a secure and delightful dining experience. Download the app today to enjoy your favorite dishes with the confidence that comes from transparency and excellence. Safe Dine – where safety meets satisfaction.
</p>
      </div>
      <Box as="main" id="about" className="container-fluid mt-md-4 mb-md-4 mt-sm-1 mb-sm-1">
        {/* Other content of the About Page */}
        <Heading as="h3" mb={4}>
          Team Members
        </Heading>

        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
          <TeamMemberCard
            title="Jovin Nicholas"
            description="I am a Software Engineer with 2 years of experience in Java, JavaScript, SQL."
            buttonText="View Profile"
            photo={JovinPhoto}
            linkedIn="https://www.linkedin.com/in/jovin-nicholas-6352b0152/"
          />
          <TeamMemberCard
            title="Abhishek Unnithan"
            description="I am a skilled developer with a strong background in building efficient solutions and optimizing business processes."
            buttonText="View Profile"
            photo={AbhishekPhoto}
            linkedIn="https://www.linkedin.com/in/abhishek-unnithan-095284185/"
          />
          <TeamMemberCard
            title="Anirudha Dudhasagare"
            description="I have hands on experience on Frontend Technologies such as HTML, CSS, ReactJS, TailwindCSS and Bootstrap and Backend technologies such as ASP .NET(MVC), SQL, MongoDB, Express and NodeJs."
            buttonText="View Profile"
            photo={AnirudhaPhoto}
            linkedIn="https://www.linkedin.com/in/anirudha97/"
          />
          <TeamMemberCard
            title="Daryl Fernandes"
            description="Experienced software engineer with a strong work ethic with 2 years of experience in developing full stack applications using React.JS, Python, and SQL database."
            buttonText="View Profile"
            photo={DarylPhoto}
            linkedIn="https://www.linkedin.com/in/darylfernandes50/"
          />
          {/* Add more TeamMemberCard components for additional team members */}
        </SimpleGrid>
      </Box>
    </ChakraProvider>
  );
};

export default About;
