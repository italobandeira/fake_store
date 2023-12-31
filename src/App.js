import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/navbar'
import Footer from './components/Footer/footer'
import Home from './modules/Home/home'
import Product from './modules/Product/product'
import Cart from './modules/Cart/cart'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
