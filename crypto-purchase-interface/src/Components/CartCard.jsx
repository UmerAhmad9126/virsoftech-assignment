import { Box, Button, Select, Text } from '@chakra-ui/react'
import React from 'react'

const CartCard = ({ name, price, i, removeCartItems }) => {


  return (
    <Box bgGradient='linear(to-r, gray.300, yellow.400, pink.200)' borderRadius={"10px"} height={"auto"}>
      <Box
        padding={"20px"}
        display={"flex"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Text color={"#ffffff"} fontSize={"18px"}>CryptoCurrency:- {name}</Text>
        <Text color={"#ffffff"} fontSize={"18px"}>Price:- {price}</Text>
      </Box>

      <Box display={"flex"} gap={"20px"} justifyContent={"space-around"}>

        <Select w="180px"  >
          <option value="">Select Quantiy</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Select>

        <Button colorScheme='blue'>Buy</Button>
        <Button colorScheme='red' onClick={removeCartItems(i)}>Remove</Button>

      </Box>
    </Box>
  )
}

export default CartCard