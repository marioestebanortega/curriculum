import React from 'react';
import './footer.css';
import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
  const { text: rootText } = useLanguage();
  const text = rootText.footer;
  const year = new Date().getFullYear();

  return (
    <footer className='footer' id='footerPage'>
      <p>
        © {year} · {text.developerName}
      </p>
    </footer>
  );
};

export default Footer;
