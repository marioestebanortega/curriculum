import React from 'react'
import './footer.css'
import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
  const { text: rootText } = useLanguage();
  const text = rootText.footer;
  return (
    <footer className="footer" id="footerPage">
      <div className="container">
        <div className="footer-first">
          <p>
            {text.cvName}
            <img
              src="/public/images/logoSinNombre.png"
              alt=""
              loading="lazy"
            />
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