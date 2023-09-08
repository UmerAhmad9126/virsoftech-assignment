import React, { useEffect, useState } from 'react'
import CartCard from '../Components/CartCard';
import { Box } from '@chakra-ui/react';

const CartPage = () => {

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  const removeCartItems = (i) => {
    cartItems.splice(i, 1);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }


  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: "20px",
        marginTop: "20px"
      }}
    >
      {
        cartItems && cartItems?.map((el, i) => (
          <Box key={i} >
            <CartCard {...el} i={i} removeCartItems={removeCartItems} />
          </Box>
        ))
      }
    </div>
  )
}

export default CartPage