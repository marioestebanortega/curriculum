import React from 'react'
import './header.css';
import logoNombre from '../../images/marioLogoNombre2.png'



const Header=()=>{
return (
    <header class="header">
    <div class="container">
      <figure class="logoContainer">
        <img class="logo" src={logoNombre} alt="" />
      </figure>
    </div>
  </header>
)
}

export default Header;