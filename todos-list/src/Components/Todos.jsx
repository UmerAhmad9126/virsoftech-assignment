import React, { useEffect, useState } from 'react'
import { Box, Text } from "@chakra-ui/react";
import AddTodo from './AddTodo';
import axios from "axios";
import TodoItem from './TodoItem';


const Todos = () => {

    const [todos, setTodos] = useState([]);

    // Add Todos
    const addTodo = (text) => {

        console.log("inside addTodo");
        const item = {
            title: text,
            status: false
        }

        axios.post("https://todos-backend-l3bu.onrender.com/todo", item)
            .then((res) => {
                // console.log('res:', res.data);
            })
            .catch((err) => {
                console.log('err:', err);
            });
    };


    // Get Todos
    const getTodos = () => {

        axios.get("https://todos-backend-l3bu.onrender.com/todo")
            .then((res) => {
                setTodos(res.data);
                // console.log('res:', res.data);
            })
            .catch((err) => {
                console.log('err:', err)
            });
    };

    // Delete todos
    const deleteTodos = (id) => {

        axios.delete(`https://todos-backend-l3bu.onrender.com/todo/${id}`)
            .then((res) => {
                // setTodos(res.data);
                // console.log('delete todo:', res.data)
            })
            .catch((err) => {
                console.log('err:', err)
            })
    }



    useEffect(() => {
        getTodos();
    }, [todos]);






    return (
        <Box>
            <AddTodo addTodo={addTodo} />



            {
                todos.length === 0 ? (
                    <Box borderRadius={"10px"} height={"60px"} bgGradient='linear(to-r, gray.300, yellow.400, pink.200)' width={"50%"} margin={"auto"} mt={"10px"} display={"flex"} gap={"20px"} justifyContent={"space-evenly"} alignItems={"center"}>
                        <Text color={"#ffffff"} fontSize={"20px"}>No tasks added yet!</Text>
                    </Box>
                ) : (
                    todos && todos?.map((el) => (
                        <Box key={el.id}>
                            <TodoItem {...el} deleteTodos={deleteTodos} />
                        </Box>
                    ))
                )

            }


        </Box>
    )
}

export default Todos