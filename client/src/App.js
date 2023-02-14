import Main from "./pages/main";

import Header from "./components/Header";
import Footer from "./components/Footer";

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<Main />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
