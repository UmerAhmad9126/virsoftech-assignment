import { Box, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import CryptoCard from '../Components/CryptoCard'

let cryptoArray = [
  {
    id: 1,
    name: "Bitcoin",
    price: 40000
  },

  {
    id: 2,
    name: "Ethrium",
    price: 20000
  },
  {
    id: 3,
    name: "Litecoin",
    price: 10000
  },
  {
    id: 4,
    name: "Blockchain Bishop",
    price: 600
  },
  {
    id: 5,
    name: "Moneyish",
    price: 700
  },
  {
    id: 6,
    name: "CurrencyN",
    price: 1000
  },
  {
    id: 7,
    name: "CoinCog",
    price: 5000
  },
  {
    id: 8,
    name: "Altcoinist",
    price: 9000
  },

  {
    id: 9,
    name: "COINTRAL",
    price: 900
  },
]



const CryptoPage = () => {

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const toast = useToast()

  const addToCart = (item) => {
    const newCart = [...cart, cryptoArray[item]];
    setCart(newCart);
    localStorage.setItem("cartItems", JSON.stringify(newCart));

    toast({
      title: `Added to Cart`,
      status: "success",
      isClosable: true,
      position:"top"
    })
  };



  
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "20px",
      marginTop: "20px"
    }}>
      {
        cryptoArray && cryptoArray?.map((el, i) => (
          <Box key={i} >
            <CryptoCard {...el} addTocart={addToCart} i={i} />
          </Box>
        ))
      }
    </div>
  )
}

export default CryptoPage