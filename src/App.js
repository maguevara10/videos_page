import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.css';
import './styles/main.css';
import './styles/estiloMenu.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Popup from "./components/Popup";

import Main from './pages/main';

function App() {
  const [usuarioList, setUsuarioList] = useState([]);
  useEffect(() => {
    Axios.get('http://localhost:3001/api/getUsuario').then((response) => {
      setUsuarioList(response.data);
    })
  }, []);
  function validar() {
    console.log(usuarioList);
    var validables = document.querySelectorAll('.validable');

    for (let index = 0; index < usuarioList.length; index++) {
      if (usuarioList[index].usu_Activo == "S") {
        validables[0].classList.add('encendido');
        validables[1].classList.remove('encendido');
      } else {
        validables[1].classList.add('encendido');
        validables[0].classList.remove('encendido');
      }
    }
  }
  if(window.closed){
    alert("cerrando");
    // for (let index = 0; index < usuarioList.length; index++) {
    //   if (usuarioList[index].usu_Activo == "S") {
    //     Axios.put("http://localhost:3001/api/usuActualizarN", {
    //     usu_Id: usuarioList[index].usu_Id
    //   })
    //   }
    // }
  }
  return (
    <Router onload={validar()}>
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
