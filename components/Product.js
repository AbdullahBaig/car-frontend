// components/Header.js
import React from 'react';
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
import { useRouter } from 'next/router';

const Product = ({ description, image, id=1 }) => {

    const router = useRouter();

    const handleProductDetailClick = (id) => {
        router.push('/ProductPage/'+id);
    };
    return (
        <Flex>
            <Box width="100%">
                <Grid className="productblock-grid" >
                    {/* Your existing content */}
                    <GridItem onClick={() => handleProductDetailClick(id)} className="product-box">
                        <Box  className="grid-product_box" >
                            <Image src={image} className="images-product_box" alt="Image Alt Text"  />
                            <Text className="title-product_block">{description}</Text>
                        </Box>
                    </GridItem>

                </Grid>
            </Box>

        </Flex>
    )
};

export default Product;
