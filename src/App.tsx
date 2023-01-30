import React from 'react';
import {Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/pages/Home';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
