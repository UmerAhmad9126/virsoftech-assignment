import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'

const CryptoCard = ({ name, price,  addTocart,i }) => {



  return (
    <Box bgGradient='linear(to-r, gray.300, yellow.400, pink.200)' borderRadius={"10px"}>
      <Box
        padding={"20px"}
        display={"flex"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Text color={"#ffffff"} fontSize={"18px"}>CryptoCurrency:- {name}</Text>
        <Text color={"#ffffff"} fontSize={"18px"}>Price:- {price}</Text>
      </Box>

      <Box>
        <Button onClick={() => addTocart(i)} color={"#ffffff"} m={"20px"} colorScheme='blue'>Add to Cart</Button>
      </Box>
    </Box>
  )
}

export default CryptoCard