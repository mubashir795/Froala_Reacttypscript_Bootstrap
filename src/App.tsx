import React from 'react';
import {Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/pages/Home';
import Features from './components/pages/Features';
import Download from './components/pages/Download';
import Docs from './components/pages/Docs';
import Online from './components/pages/Online';
import Sencha from './components/pages/Sencha';
import Customers from './components/pages/Customers';
import Solution from './components/pages/Solution';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/features' element={<Features/>} />
      <Route path='/download' element={<Download/>} />
      <Route path='/docs' element={<Docs/>} />
      <Route path='/online' element={<Online/>} />
      <Route path='/sencha' element={<Sencha/>} />
      <Route path='/customers' element={<Customers/>} />
      <Route path='/solution' element={<Solution/>} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
