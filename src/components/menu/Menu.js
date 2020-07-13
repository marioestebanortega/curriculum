import React from 'react'
import './menu.css';
//import logoNombre from '../../images/marioLogoNombre2.png'



const Menu=()=>{
  

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
            <a className="link" href="#encabezado">Perfil</a>
          </div>
        </li>
        <li>
          <div className="linkContainer">
            <i className="icon-job"></i>
            <a className="link" href="#experiencia">Experiencia laboral</a>
          </div>
        </li>
        <li>
          <div className="linkContainer">
            <i className="icon-tools"></i>
            <a className="link" href="#certificaciones">Certificaciones</a>
          </div>
        </li>
        <li>
          <div className="linkContainer">
            <i className="icon-graduate"></i>
            <a className="link" href="#educacion">Educación</a>
          </div>
        </li>
        <li>
          <div className="linkContainer">
            <i className="icon-language"></i>
            <a className="link" href="#idiomas">Idiomas</a>
          </div>
        </li>

        <li>
           <div className="linkContainer-sec separator">
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