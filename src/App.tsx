import React from 'react';
import {Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/pages/Home';
import Features from './components/pages/Features';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/features' element={<Features/>} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
