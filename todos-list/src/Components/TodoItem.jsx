import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'

const TodoItem = ({ title, deleteTodos, id }) => {

  return (
    <Box borderRadius={"10px"} height={"60px"} bgGradient='linear(to-r, gray.300, yellow.400, pink.200)' width={"50%"} margin={"auto"} mt={"10px"} display={"flex"} gap={"20px"} justifyContent={"space-evenly"} alignItems={"center"}>
      <Text color={"#ffffff"} fontSize={"20px"}>{title}</Text>
      <Button height={"40px"} colorScheme='red' onClick={() => deleteTodos(id)}>Remove</Button>
    </Box>
  )
}

export default TodoItem