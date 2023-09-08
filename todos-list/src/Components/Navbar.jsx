import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
    return (
        <Box
            w='100%'
            h='100px'
            bgGradient='linear(to-r, gray.300, yellow.400, pink.200)'
            display={"flex"} 
            justifyContent={"center"} 
            alignItems={"center"}
        >
            <Text fontSize={"24px"} color={"#ffffff"}> Todo App</Text >
        </Box >
    )
}

export default Navbar