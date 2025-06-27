

import FullScreenSection from './FullScreenSection';
import { Grid,  Heading,  } from '@chakra-ui/react';

import Card from './Card';


const projects = [
    {
        title: 'React-powered Restaurant Reservation Website',
        shortDescription: 'A fully functional restaurant booking website built using React for a Capstone project completed in the Meta Front-End Developer course.',
        technologies: ['React', 'JavaScript', 'HTML', 'CSS', 'Netlify Deployment'],
        githubLink: 'https://github.com/grnt7/Little-Lemon-Capstone',
        liveDemoLink: 'https://little-lemon-booking-capstone.netlify.app/',
        getImageSrc: () => require('../images/Frame 1 (2) copy.jpg'),
    },
	
	{
		title: 'Dog Walking App Mock-Up UX Design',
		shortDescription: 'Designed and created a mock-up for a dog walking app, focusing on user experience and interface design.',
		technologies: ['Figma', 'Canva', 'Google Slides','User research fundamentals', 'interaction design', 'information architecture', 'prototyping', 'accessibility principles', 'WCAG standards'],
		link: '/Woof Walkers Dog Walking App - Case study slide deck Dog Walker App and Website  (1).pdf', // <---PDF link
        // No githubLink for this project
		 
		getImageSrc: () => require('../images/iPhone 14 Pro Mockup-Recovered.jpg'),
	},
	
	{
		title: 'Airbnb Clone',
		shortDescription:'Developed and deployed a clone of the Airbnb frontend, focusing on product display, and user interaction.',
		technologies:['HTML', 'Tailwind CSS', 'JavaScript', 'React', 'Calendar Picker','Mapbox API', 'Next.js', 'Vercel Deployment'],
		githubLink: 'https://github.com/grnt7/airbnb-clone1',
		liveDemoLink:'https://airbnb-clone1-two.vercel.app/' ,
		getImageSrc: () => require('../images/Screenshot_airbnb-clone1-Page1.jpeg'),
		
		
		 
			
	},
	{
		title: 'Netflix Clone',
		shortDescription:
			'Developed and deployed a clone of the Netflix frontend, focusing on product display, and user interaction. React, Redux, Google Auth, Firebase, TMDB, Stripe Checkout & Webhooks, Redux, Firebase Deployment',
		technologies: ['React', 'Redux', 'Axios', 'Firestore', 'TMDB API', 'Stripe Checkout & Webhooks', 'Google Auth', 'Firebase Deployment'],
		githubLink: 'https://github.com/grnt7/Netflixy-demo',
		liveDemoLink: 'https://neflix-build-demo.vercel.app/',
		getImageSrc: () => require('../images/netflix-clone-23a24.web.app_profilescreen.png'),
		
			
			
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
                {projects.map((project, index) => (
                    <Card
                        key={index} // Always essential for lists in React
                        title={project.title}
                        shortDescription={project.shortDescription} // <--- Pass the NEW prop name
                        imageSrc={project.getImageSrc()}
                        technologies={project.technologies}     // <--- Pass the NEW prop name
                        githubLink={project.githubLink}         // <--- Pass the NEW prop name
                        liveDemoLink={project.liveDemoLink}     // <--- Pass the NEW prop name
						link={project.link}                 // <--- Pass the 'link' prop here
        				pdfPath1={project.pdfPath1}         // Pass if it exists for the project
                       
                        // Only pass pdfPath1 if it exists in your project object:
                        // pdfPath1={project.pdfPath1}
                    />
                ))}
            </Grid>
	  </FullScreenSection>
	);
  };
  
  export default ProjectsSection;
  





