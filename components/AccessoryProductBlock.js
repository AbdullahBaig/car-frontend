// components/Header.js
import React from 'react';
import { useRouter } from 'next/router';
import {
    Heading,
    Input,
    Grid,
    GridItem,
    Box,
    Container,
    Image,
    Text,
    Flex,
    Link,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Center
} from '@chakra-ui/react';
import '../styles//global.css';
import {ChevronDownIcon} from "@chakra-ui/icons";
import Product from "./Product";

const AccessoryProductBlock = ({title}) => {
    const router = useRouter();

    const handleViewMoreClick = () => {
        // Use router.push to navigate to the product list page
        router.push('/ViewMore'); // Replace '/productlist' with the actual URL of your product list page
    };
    return (
        <Flex>
            <Box width="100%">
                <Heading ml={15} fontStyle="bold" color="black" as="h4" size="lg" mb={4}>
                    {title}
                    <span className="bussiness-url">
                        See All {'>'}
                    </span>
                </Heading>
                <Grid className="item acsry-productblock-grid" gap={6}>

                    <Product
                        image="/images/drain-plug.png"
                        description="Drain Plug"
                    >
                    </Product>
                    <Product
                        image="/images/lug-nuts.png"
                        description="Lug Nuts"
                    />
                    <Product
                        image="/images/brake-pad-set.png"
                        description="Brake Pad Set"
                    />
                    <Product
                        image="/images/brake-disc.png"
                        description="Brake Disc"
                    />
                    <Product
                        image="/images/wheel-bearing.png"
                        description="Wheel Bearing"
                    />
                    <Product
                        image="/images/wheel-stud.png"
                        description="Wheel Stud"
                    />
                    <Product
                        image="/images/ball-joint.png"
                        description="Ball Joint"
                    />
                    <Product
                        image="/images/backing-plate.png"
                        description="Backing Plate"
                    />
                    <Product
                        image="/images/coil-springs.jpg"
                        description="Coil Springs"
                    />
                    <Product
                        image="/images/camper-shell.png"
                        description="Camper Shell"
                    />


                </Grid>
            </Box>

        </Flex>

    )
};

export default AccessoryProductBlock;
