import React from 'react'
import './header.css';
// logoNombre from '../../images/logoNombre2.png'



const Header=()=>{
return (
    <header className="header">
    <div className="container">
      <figure className="logoContainer">
        <img className="logo" src="/public/images/logoNombre2.png" alt="" />
       
      </figure>
    </div>
  </header>
)
}

export default Header;