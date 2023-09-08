import { Box, Button, Input, Select, Text, useToast } from '@chakra-ui/react';
import './App.css';
import Navbar from './Components/Navbar';
import { useState } from 'react';

function App() {

  const [temp, setTemp] = useState("");
  const [scale, setScale] = useState("");
  const [output, setOutput] = useState("");
  const toast = useToast()

  const handletemp = (e) => {
    setTemp(e.target.value);
  };

  const handleScale = (e) => {
    setScale(e.target.value);
  };

  const handleCelciusToFehrenheit = () => {

    if (isNaN(temp)) {
      toast({
        title: `Please enter a valid number`,
        status: "warning",
        isClosable: true,
        position: "top"
      });
      return
    }

    if (scale === "celcius") {
      let value = (+temp * 9 / 5) + 32;
      let newValue = `${+temp}°C is equal to ${value}°F`
      setOutput(newValue);
      setScale("");
      setTemp("");
    }
    if (scale === "fahrenheit") {
      setOutput("");
      toast({
        title: `Please change the scale`,
        status: "warning",
        isClosable: true,
        position: "top"
      });
    }
  }

  const handlFehrenheitToCelcius = () => {

    if (isNaN(temp)) {
      toast({
        title: `Please enter a valid number`,
        status: "warning",
        isClosable: true,
        position: "top"
      });
      return
    }

    if (scale === "fahrenheit") {
      let value = (+temp - 32) * 5 / 9
      let newValue = `${+temp}°F is equal to ${value}°C`
      setOutput(newValue);
      setScale("");
      setTemp("");
    }
    if (scale === "celcius") {

      setOutput("");
      toast({
        title: `Please change the scale`,
        status: "warning",
        isClosable: true,
        position: "top"
      });
    }
  }


  return (
    <div className="App">
      <Navbar />

      <Box mt="40px">
        <Box width={"60%"} display={"flex"} gap={"30px"} margin={"auto"}>
          <Input value={temp} onChange={(e) => handletemp(e)} placeholder='Enter Tempreture Value' />
          <Select value={scale} onChange={(e) => handleScale(e)}>
            <option value=''>Select tempreture scales</option>
            <option value='celcius'>Celcius</option>
            <option value='fahrenheit'>Fahrenheit</option>
          </Select>
        </Box>

        <Box width={"60%"} m={"auto"} mt={"20px"} display={"flex"} gap={"20px"} justifyContent={"center"} alignItems={"center"}>
          <Button onClick={handleCelciusToFehrenheit} colorScheme='yellow'>Convert to Fahrenheit</Button>
          <Button onClick={handlFehrenheitToCelcius} colorScheme='yellow'>Convert to Celcius</Button>
        </Box>

        <Box
          margin={"auto"}
          mt={"20px"}
          w='60%'
          bgGradient='linear(to-r, gray.300, yellow.400, pink.200)'
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          borderRadius={"10px"}
        >
          <Text fontSize={"24px"} color={"#ffffff"}>{output}</Text >
        </Box >
      </Box>

    </div>
  );
}

export default App;
