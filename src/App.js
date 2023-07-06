import React from 'react'
import './App.css'
import Navbar from './components/Navbar/navbar'
import Header from './components/Header/header'
import Home from './modules/Home/home'

function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
