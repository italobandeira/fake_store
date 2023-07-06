import React from 'react'
import './App.css'
import Navbar from './components/Navbar/navbar'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import Home from './modules/Home/home'
import { Routes, Route } from 'react-router-dom'
import Product from './modules/Product/product'

function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products/:id' element={<Product/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
