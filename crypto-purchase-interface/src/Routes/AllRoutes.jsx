import React from 'react'
import { Routes, Route } from "react-router-dom"
import CryptoPage from '../Pages/CryptoPage'
import CartPage from '../Pages/CartPage'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CryptoPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  )
}

export default AllRoutes