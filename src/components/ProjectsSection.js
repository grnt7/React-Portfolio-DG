//import React from 'react';

import FullScreenSection from './FullScreenSection';
import { Grid,  Heading,  } from '@chakra-ui/react';

import Card from './Card';


const projects = [
	{
		title: 'React-powered Restaurant Reservation Website',
        description:
            'Restaurant Booking website that is fully functional, Built using React for Capstone project completed in Meta Front-End Developer course. Technologies Used: React, JavaScript, HTML, CSS, Netlify Deployment ',
        getImageSrc: () => require('../images/Frame 1 (2) copy.jpg'),
		 link:'https://little-lemon-booking-capstone.netlify.app/' 
		 
		

       
		
  },
	
	{
		title: 'Dog Walking App',
    description: 'UX Design Project with full case study created within Google UX Design professional course 🔥️',
    getImageSrc: () => require('../images/iPhone 14 Pro Mockup-Recovered.jpg'),
    link: 'https://docs.google.com/presentation/d/e/2PACX-1vSA5FI8jpBOk-UhOrHp15AkuB-N1hPRkT3tJaGC7p6rBfXPwu1dUmPbzzlQZANu4J3VvfczSLT2ujOd/pub?start=false&loop=false&delayms=3000', // Store as a string
		 
		
		 
	},
	
	{
		title: 'Airbnb Clone',
		description:
			'Developed and deployed a clone of the Airbnb frontend, focusing on product display, and user interaction. Technologies Used: HTML, CSS, JavaScript, React, Nextjs, Vercel Deployment.',
		getImageSrc: () => require('../images/Screenshot_airbnb-clone1-Page1.jpeg'),
		
		link: 'https://airbnb-clone1-two.vercel.app/'  // Store as a string
		 
			
	},
	{
		title: 'Netflix Clone',
		description:
			'Developed and deployed a clone of the Netflix frontend, focusing on product display, and user interaction. React, Redux, Google Auth, Firebase, TMDB, Stripe Checkout & Webhooks, Redux, Firebase Deployment',
		getImageSrc: () => require('../images/netflix-clone-23a24.web.app_profilescreen.png'),
		link: 'https://netflix-clone-23a24.web.app//'
			
			
	}	
		

	
];

const ProjectsSection = () => {
	return (
	  <FullScreenSection
		backgroundColor="#14532d"
		isDarkBackground
		p={8}
		alignItems="flex-start"
		spacing={8}
	  >
		<Heading as="h1" id="projects-section">
		  Featured Projects
		</Heading>
		<Grid
                templateColumns={{
                    base: 'repeat(1, 1fr)', // 1 column on mobile
                    md: 'repeat(2, 1fr)', // 2 columns on medium screens and up
                }}
                gap={8}
            >
                {projects.map((project) => (
                    <Card
					key={project.title}
					title={project.title}
					description={project.description}
					imageSrc={project.getImageSrc()}
					link={project.link}
                    />
                ))}
            </Grid>
	  </FullScreenSection>
	);
  };
  
  export default ProjectsSection;
  





