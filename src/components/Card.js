import { Box, Flex, HStack, Heading, Image, Text, Link, Spacer } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import React from "react";

const Card = ({ title, description, imageSrc, link, pdfPath1 }) => {
	console.log("Link prop:", link); // Add this line
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
                    <Text fontSize="sm" word-wrap="break-word" overflow="hidden">
                        {description}
                    </Text>
                </Box>
                <Spacer />
                <HStack w="100%" justifyContent="space-between"> {/* Added justifyContent */}
				<div>
				{pdfPath1 && (
					<a href={pdfPath1} download>
						Download PDF 1
					</a>
				)}
			</div>
			{link && (
				<Link
					href={link}
					isExternal
					target="_blank"
					rel="noopener noreferrer"
					fontSize="sm"
					display="flex"
					alignItems="center"
				>
					See More <ExternalLinkIcon />
				</Link>
			)}
		</HStack>
	</Flex>
</Flex>
);
};

export default Card;




