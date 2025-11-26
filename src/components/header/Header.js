import React from 'react'
import './header.css';
import { useLanguage } from '../../context/LanguageContext';

const Header = () => {
  const { lang, setLang, text } = useLanguage();

  const selectLang = (event) => {
    setLang(event.target.value)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="select-language">
          <select name="cars" id="si-select-language" value={lang} onChange={selectLang}>
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