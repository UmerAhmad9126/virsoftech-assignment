import React, { useEffect, useState } from 'react'
import CartCard from '../Components/CartCard';
import { Box, Text } from '@chakra-ui/react';

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

  console.log('cartItems:', cartItems);

  return (
    <div>
      {cartItems.length === 0 ? (
        <Box mt={"40px"}>
          <Text>Your cart is empty!</Text>
        </Box>
      ) : (
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
      )}
    </div>


  )
}

export default CartPage