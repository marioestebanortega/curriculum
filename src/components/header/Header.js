import React,{useEffect} from 'react'
import './header.css';
import {getTextLang} from '../../config'



const Header=({lang,setLang})=>{
  let text=getTextLang(lang).general;
  const selectLang=(event)=>{
      setLang(event.target.value)
      text=getTextLang(lang).general;
  }

  useEffect(()=>{
    //Inicializa el valor del lenguaje
    document.getElementById('si-select-language').value=navigator.language;
  },[])
  

  
return (
    <header className="header">
    <div className="container">
        <div className="select-language">
    <select name="cars" id="si-select-language" onChange={selectLang}>
    <option value="es">Español</option>
    <option value="en">English</option>
  </select>
  </div>
      <figure className="logoContainer">
        <img className="logo" src="/public/images/logoNombre2.png" alt="" />
       
      </figure>
    </div>
  </header>
)
}

export default Header;