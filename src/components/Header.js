import React from "react";

function Header() {
    const nav = document.querySelector('.nav');
    const menu = document.querySelector('.menu');
    

    function prender(){
        const popup = document.querySelector('.popup')
        popup.classList.remove('encendido');
    }
    return (
        <header>
            <nav className="nav">
                <div className="logo">
                    <img src="imagenes/Iglesia.png" alt="Logo Página" class="Pequenio" />
                </div>
                <ul className="menu">
                    <li><a href="/">Inicio</a></li>
                    <li><a href="videos">Vídeos</a></li>
                    <li><a href="quienesSomos">Sobre Nosotros</a></li>
                    <li><a href="contactanos">Contáctanos</a></li>
                    <li onClick={prender}><a>Iniciar Sesión</a></li>
                </ul>

                <div className="menu-btn" onClick={() => {
                    menu.classList.toggle('active');
                }}>
                    <i className="fas fa-bars">
                        <img className="hamburguer" src="imagenes/hamburguesa.png" />
                    </i>
                </div>
            </nav>
        </header>
    );
}

export default Header;