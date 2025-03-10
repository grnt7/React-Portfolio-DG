//import React from 'react';

import FullScreenSection from './FullScreenSection';
import { Grid,  Heading,  } from '@chakra-ui/react';

import Card from './Card';


const projects = [
	{
		title: 'React App and Website',
        description:
            'Table Booking website that is fully functional, created in React as Capstone project completed in Meta Front-End Developer course.',
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
		title: 'Photo Gallery',
		description:
			'CSS Flexbox Photo Gallery of Cats. Project created as part of Freecodecamp Responsive Design Course.',
		getImageSrc: () => require('../images/CATSGALLERY.jpg'),
		
		link: 	"https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-css-flexbox-by-building-a-photo-gallery/step-2"  // Store as a string
		 
			
	},
	{
		title: 'Typography',
		description:
			'Learn CSS Grid. HTML and CSS Typography project created within Freecodecamp responsive website design course.',
		getImageSrc: () => require('../images/CSSgrid MagazineReducedscale 2.jpg'),
		link: "https://www.freecodecamp.org/learn/full-stack-developer/workshop-magazine/step-79" 
			
			
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
  





