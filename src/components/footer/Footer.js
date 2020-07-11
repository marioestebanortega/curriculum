import React from 'react'
import './footer.css'
import footerImage from './footer.css'


const Footer = ()=>{
return (
    <footer class="footer">
    <div class="container">
      <div class="footer-first">
        <p>
          Hoja de vida
          <img src={footerImage} alt="" />
        </p>
      </div>
      <div class="footer-second">
        <p>
          Implementada por <strong><b>Mario Esteban Ortega Garcés</b></strong>
        </p>
      </div>
    </div>
  </footer>
 
)
}


export default Footer;