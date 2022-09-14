import React from 'react'
import foto from "../assets/logo1.png"
import CartWidget from './CartWidget'


const NavBar = () => {
    return (
        <div className='navBar'>

            <img src={foto} alt="foto del logo" />
            <a href='#'>Inicio</a>
            <a href='#'>Contacto</a>
            <a href='#'>Sobre Nostros</a>
            <a href='#'>Mas Informacion</a>
            <CartWidget />
        </div>
    )
}

export default NavBar