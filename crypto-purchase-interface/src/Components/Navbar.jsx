import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box
      w='100%'
      h='100px'
      bgGradient='linear(to-r, gray.300, yellow.400, pink.200)'
      display={"flex"}
      justifyContent={"space-around"}
      alignItems={"center"}
    >
      <Link to="/">
        <Text fontSize={"24px"} color={"#ffffff"}>Crypto</Text >
      </Link>
      <Link to="/cart">
        <Text fontSize={"24px"} color={"#ffffff"}>Cart</Text >
      </Link>

    </Box >
  )
}

export default Navbar