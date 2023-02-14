import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import ContactUs from './components/pages/ContactUs';



function App() {

  return (
    <>
 
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/contactUs' element={<ContactUs/>}/>


        </Routes>
      </Router>
   
    </>
  );
}

export default App;
