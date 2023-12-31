// components/Header.js
import React from 'react';
import { Box,Text } from '@chakra-ui/react';
import '../styles//global.css';

const GeniunePartsSection = () => {
    return (
        <Box
            backgroundImage="url('/images/main-banner-1.png')" // Replace with your image URL
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            height="400px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            color="white"
            marginTop="280"
            position="relative"
        >
            <Text className="genuine-parts-heading"  >
                Genuine Toyota Parts and Accessories Online Store
            </Text>
            <Text className="genuine-parts-para">
                {/*eslint-disable-next-line react/no-unescaped-entities*/}
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </Text>
        </Box>

    );
};

export default GeniunePartsSection;
