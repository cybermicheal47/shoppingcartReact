import React from 'react'

import { BrowserRouter,Route,Routes } from 'react-router-dom'
import App from "./App";
import Header from './components/Header'
import Prepage from './components/Prepage'
import Product from './components/Product'
import Checkout from './components/Checkout'
import Homepage from './Homepage';





const RouteSwitch = () => {
  return (
  <BrowserRouter>
  <Routes>

  <Route path="/" element={<Homepage />} />
        <Route path="/product" element={<App />} />
        <Route path="/checkout" element={<Checkout />} />

  </Routes>
  
  
  
  </BrowserRouter>
  )
}

export default RouteSwitch
