import React from 'react'
import './menu.css';
import {getTextLang } from '../../config'


const Menu=({lang}) => {
  const text=getTextLang(lang).menu;
  const onclickAction=(event)=>{
    window.print();
}


return (
    <section id="seccionMenu" className="menu-container arrow-hide">
    <nav className="menu">
      <ol>
        <li>
          <div className="linkContainer">
            <i className="icon-user"></i>
            <a className="link" href="#encabezado">{text.profile}</a>
          </div>
        </li>
        <li>
          <div className="linkContainer">
            <i className="icon-job"></i>
<a className="link" href="#experiencia">{text.exp}</a>
          </div>
        </li>
        <li>
          <div className="linkContainer">
            <i className="icon-tools"></i>
<a className="link" href="#certificaciones">{text.certif}</a>
          </div>
        </li>
        <li>
          <div className="linkContainer">
            <i className="icon-graduate"></i>
            <a className="link" href="#educacion">{text.education}</a>
          </div>
        </li>
        <li>
          <div className="linkContainer">
            <i className="icon-language"></i>
            <a className="link" href="#idiomas">{text.lang}</a>
          </div>
        </li>

        <li>
          <div className="linkContainer separator">
            <i className="icon-job"></i>
            <a className="link" href="https://marioestebanortega.github.io/portafolio/"  target="_blank">{text.portf}</a>
          </div>
        </li>
        <li>
           <div className="linkContainer-sec">
             <button type="button" id="buttonPrinter" onClick={onclickAction}>
            <i className="icon-printer"></i>
            </button>
          </div>
        </li>
      </ol>
    </nav>
    <div className="arrowContainer">
      <i className="arrow arrow-right" id="arrow-menu"></i>
    </div>
  </section>
)
}

export default Menu;