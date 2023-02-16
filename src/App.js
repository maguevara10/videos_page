import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';
import './styles/main.css';
import './styles/estiloMenu.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Popup from "./components/Popup";

import Main from './pages/main';

function App() {
  return (
    <Router>
      <Header />
      <Popup />
      <Routes>
        <Route exact path="/" element={<Main />} />
      </Routes>
      <Footer />
      
    </Router>
  );
}

export default App;
