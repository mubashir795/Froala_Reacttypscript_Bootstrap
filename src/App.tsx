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
import Pricing from './components/pages/Pricing';
import Tour from './components/pages/Tour';
import Extend from './components/pages/Extend';
import Inline from './components/pages/Inline';
import Plugin from './components/pages/Plugin';
import Artstation from './components/pages/Artstation';
import Closeio from './components/pages/Closeio';
import Uploader from './components/pages/Uploader';
import Unbounce from './components/pages/Unbounce';
import Contact from './components/pages/Contact';
import Sdkc from './components/pages/Sdkc';

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
        <Route path='/pricing' element={<Pricing/>} />
        <Route path='/tour' element={<Tour/>} />
        <Route path='/extend' element={<Extend/>} />
        <Route path='/inline' element={<Inline/>} />
        <Route path='/plugin' element={<Plugin/>} />
        <Route path='/artstation' element={<Artstation/>} />
        <Route path='/closeio' element={<Closeio/>} />
        <Route path='/uploader' element={<Uploader/>} />
        <Route path='/unbounce' element={<Unbounce/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/sdkc' element={<Sdkc/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
