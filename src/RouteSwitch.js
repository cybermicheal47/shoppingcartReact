import React from 'react'

import { BrowserRouter,Route,Routes } from 'react-router-dom'
import App from "./App";
import Header from './components/Header'
import Prepage from './components/Prepage'
import Product from './components/Product'
import Checkout from './components/Checkout'






const RouteSwitch = () => {
  return (
   
     
  <BrowserRouter>
  <Routes> 
  
  <Route path="/" element={<App/>} />
  

        <Route path="/product" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />

  </Routes>
  
  
  
  </BrowserRouter>

  )
}

export default RouteSwitch
