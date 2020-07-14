import React from 'react'
import './footer.css'
import {getTextLang } from '../../config'


const Footer = ({lang})=>{
  const text=getTextLang(lang).footer;
return (
    <footer className="footer" id="footerPage">
    <div className="container">
      <div className="footer-first">
        <p>
          {text.cvName}
          <img
           src="/public/images/logoSinNombre.png"
            alt="" />
        </p>
      </div>
      <div className="footer-second">
        <p>
          {text.implementedDesc} <strong><b>{text.developerName}</b></strong>
        </p>
      </div>
    </div>
  </footer>
 
)
}


export default Footer;