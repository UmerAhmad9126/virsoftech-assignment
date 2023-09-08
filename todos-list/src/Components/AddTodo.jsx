import { Box, Input, Button } from '@chakra-ui/react'
import React, { useState } from 'react'

const AddTodo = ({ addTodo }) => {

    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const setTextNull = () => {
        setText("");

    }

    const callBothFunc = () => {
        setTextNull();
        addTodo(text);
    }

    return (
        <Box margin={"auto"} w="50%" display={"flex"} gap={"20px"} mt="50px">
            <Input placeholder='Add Todo' onChange={handleChange} value={text} />
            <Button onClick={callBothFunc} width={"200px"} colorScheme='yellow' color={"#ffffff"}>Add</Button>
        </Box>
    )
}

export default AddTodo