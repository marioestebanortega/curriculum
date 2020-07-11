import React from 'react'
import './menu.css';
//import logoNombre from '../../images/marioLogoNombre2.png'



const Menu=()=>{
return (
    <section id="seccionMenu" class="menu-container arrow-hide">
    <nav class="menu">
      <ol>
        <li>
          <div class="linkContainer">
            <i class="icon-user"></i>
            <a class="link" href="#encabezado">Perfil</a>
          </div>
        </li>
        <li>
          <div class="linkContainer">
            <i class="icon-job"></i>
            <a class="link" href="#experiencia">Experiencia laboral</a>
          </div>
        </li>
        <li>
          <div class="linkContainer">
            <i class="icon-tools"></i>
            <a class="link" href="#certificaciones">Certificaciones</a>
          </div>
        </li>
        <li>
          <div class="linkContainer">
            <i class="icon-graduate"></i>
            <a class="link" href="#educacion">Educación</a>
          </div>
        </li>
        <li>
          <div class="linkContainer">
            <i class="icon-language"></i>
            <a class="link" href="#idiomas">Idiomas</a>
          </div>
        </li>
      </ol>
    </nav>
    <div class="arrowContainer">
      <i class="arrow arrow-right" id="arrow-menu"></i>
    </div>
  </section>
)
}

export default Menu;