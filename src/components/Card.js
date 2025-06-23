import { Box, Flex, Image, Heading, Text, Link, HStack, Spacer, Tag, TagLabel, } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons'; // Assuming FaGithub is imported or similar icon for GitHub
import { FaGithub } from 'react-icons/fa';



const Card = ({
    title,
    shortDescription, // Changed from 'description'
    imageSrc,
    technologies,     // New prop
    githubLink,       // New prop
    liveDemoLink,     // New prop (replaces the generic 'link' for clarity)
    externalLink,     // <--- Pass the 'link' prop here
	link, 
    pdfPath1
}) => {
    // console.log("Link prop:", link); // This line should be removed or updated

    return (
        <Flex direction="column" w="100%" bg="white" color="black" borderRadius="lg" overflow="hidden" boxShadow="md" _hover={{ boxShadow: "lg", textDecoration: "none" }}>
            <Box overflow="hidden" w="100%">
                <Image src={imageSrc} alt={title} objectFit="cover" w="100%" h="100%" aspectRatio="2/2" loading="lazy" scale="auto" />
            </Box>
            <Flex direction="column" flexGrow={1} px={4} py={2} overflow="hidden">
                <Box align="start">
                    <Heading as="h3" size="md">
                        {title}
                    </Heading>
                    {/* Render the short description */}
                    <Text fontSize="sm" wordBreak="break-word" mt={2}> {/* Use mt for margin-top */}
                        {shortDescription}
                    </Text>

                    {/* Technologies Used Section */}
                    {technologies && technologies.length > 0 && (
                        <Box mt={3}> {/* Margin top for spacing */}
                            <Text fontSize="sm" fontWeight="bold">Technologies Used:</Text>
                            <HStack spacing={1} wrap="wrap" mt={1}> {/* Use HStack for inline tags, wrap for multi-line */}
                                {technologies.map((tech, techIndex) => (
                                    <Tag key={techIndex} size="sm" variant="solid" colorScheme="blue">
                                        <TagLabel>{tech}</TagLabel>
                                    </Tag>
                                ))}
                            </HStack>
                        </Box>
                    )}
                </Box>
                <Spacer />
               <HStack w="100%" justifyContent="space-between" mt={4}>
    {/* Left-aligned links: This HStack will contain the GitHub link if it exists */}
    <HStack spacing={4}>
        {githubLink && (
            <Link
                href={githubLink}
                isExternal
                target="_blank"
                rel="noopener noreferrer"
                fontSize="sm"
                display="flex"
                alignItems="center"
                color="blue.500"
                _hover={{ textDecoration: 'underline' }}
            >
                <FaGithub mr={1} /> GitHub Repo
            </Link>
        )}
    </HStack>

    {/* Right-aligned links: This HStack will contain Live Demo, PDF, etc. */}
    <HStack spacing={4}>
        {liveDemoLink && (
            <Link
                href={liveDemoLink}
                isExternal
                target="_blank"
                rel="noopener noreferrer"
                fontSize="sm"
                display="flex"
                alignItems="center"
                color="blue.500"
                _hover={{ textDecoration: 'underline' }}
            >
                Live Demo <ExternalLinkIcon ml={1} />
            </Link>
        )}

        {link && ( // Your PDF link
            <Link
                href={link}
                isExternal
                target="_blank"
                rel="noopener noreferrer"
                fontSize="sm"
                display="flex"
                alignItems="center"
                color="blue.500"
                _hover={{ textDecoration: 'underline' }}
                // download={link.endsWith('.pdf') ? true : undefined} // Optional: force download
            >
                {link.endsWith('.pdf') ? 'View Case Study' : 'View Project'} <ExternalLinkIcon ml={1} />
            </Link>
        )}

        {pdfPath1 && ( // Your separate download PDF link if still used
            <Link href={pdfPath1} download fontSize="sm" color="blue.500" _hover={{ textDecoration: 'underline' }}>
                Download PDF
            </Link>
        )}
    </HStack>
</HStack>
            </Flex>
        </Flex>
    );
};

export default Card;

