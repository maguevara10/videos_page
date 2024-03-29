import React from 'react';
import "./Popup.css";
import { useState, useEffect } from 'react';
import Axios from 'axios';


function Popup() {
    const [correo, setCorreo] = useState('');
    const [contrasenia, setContrasenia] = useState('');
    const [lista, setLista] = useState([]);

    function apagar() {
        const popup = document.querySelector('.popup');
        popup.classList.add('encendido');
    }

    const handleSubmit = (event) => {
        event.prevenrDefault()
        console.log('This is Submit')
    }

    useEffect(() => {
        Axios.get("http://localhost:3001/api/getUsuario", {
            correo: correo,
            contrasenia: contrasenia
        }).then(function (response) {
            setLista(response.data)
        })
    })
    function validar() {
        console.log(lista);
        var encontrado = false;
        var i = 0;
        for (let index = 0; index < lista.length; index++) {
            if (lista[index].usu_Correo == correo && lista[index].usu_Password == contrasenia) {
                encontrado = true;
                i = index;
                break;
            }
        }
        if (encontrado) {
            alert("Bienvenido " + lista[i].usu_Nombre);
            Axios.put("http://localhost:3001/api/usuActualizarS", {
                usu_Id: lista[i].usu_Id
            })
        } else {
            alert("Correo o Contraseña incorrecta")
        }
    };
    return (
        <div className='popup encendido'>
            <div className='inner-popup'>
                <a className='close-btn' onClick={apagar}>X</a>
                <div className='mainPopup'>
                    <div className='contenidoPopup grid'>
                        <h1>Iniciar Sesión</h1>
                        <button class="cuentas" id="google">Iniciar sesión con Google</button><br />
                        <button class="cuentas" id="facebook">Iniciar sesión con Facebook</button><br />

                        <div className='formulario'>
                            <label for="correo">Correo: </label>
                            <input type="text" class="inputFormulario login" id="nombre" name="nombre" onChange={(e) => {
                                setCorreo(e.target.value)
                            }} />
                            <label for="contraseña">Contraseña:</label>
                            <input type="password" class="inputFormulario login" id="contraseña" name="contraseña" onChange={(e) => {
                                setContrasenia(e.target.value)
                            }} />
                            <br />
                            <a onClick={validar} href="/">Iniciar Sesión</a>
                        </div>
                        <p id="regis">¿No tienes una cuenta? ¡Crea una <a href='IniciarSesion'>aquí</a>!</p>
                    </div>
                    <div>
                        <img className='imagen' src='imagenes/Catedral_de_Latacunga.jpg' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Popup;