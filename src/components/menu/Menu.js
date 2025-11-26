import React, { useState, useEffect } from 'react'
import './menu.css';
import { useLanguage } from '../../context/LanguageContext';

const Menu = () => {
  const { text: rootText } = useLanguage();
  const text = rootText.menu;
  const [isActive, setIsActive] = useState(false);
  const [isArrowHidden, setIsArrowHidden] = useState(true); // Default to hidden/collapsed as per original class 'arrow-hide'

  const onclickAction = (event) => {
    window.print();
  }

  const toggleMenu = () => {
    setIsActive(!isActive);
  }

  const toggleDesktopMenu = () => {
    setIsArrowHidden(!isArrowHidden);
  }

  // Close menu when clicking outside (simple implementation)
  useEffect(() => {
    const closeMenu = (e) => {
      if (isActive && !e.target.closest('.menu') && !e.target.closest('#burger-menu')) {
        setIsActive(false);
      }
    }
    if (isActive) {
      document.body.addEventListener('click', closeMenu);
    }
    return () => {
      document.body.removeEventListener('click', closeMenu);
    }
  }, [isActive]);

  return (
    <>
      <i
        className="icon-menu burger-button"
        id="burger-menu"
        onClick={toggleMenu}
      ></i>

      <section
        id="seccionMenu"
        className={`menu-container ${isArrowHidden ? 'arrow-hide' : ''}`}
      >
        <nav className={`menu ${isActive ? 'is-active' : ''}`}>
          <ol>
            <li>
              <div className="linkContainer">
                <i className="icon-user"></i>
                <a className="link" href="#encabezado" onClick={() => setIsActive(false)}>{text.profile}</a>
              </div>
            </li>
            <li>
              <div className="linkContainer">
                <i className="icon-job"></i>
                <a className="link" href="#experiencia" onClick={() => setIsActive(false)}>{text.exp}</a>
              </div>
            </li>
            <li>
              <div className="linkContainer">
                <i className="icon-tools"></i>
                <a className="link" href="#certificaciones" onClick={() => setIsActive(false)}>{text.certif}</a>
              </div>
            </li>
            <li>
              <div className="linkContainer">
                <i className="icon-graduate"></i>
                <a className="link" href="#educacion" onClick={() => setIsActive(false)}>{text.education}</a>
              </div>
            </li>
            <li>
              <div className="linkContainer">
                <i className="icon-language"></i>
                <a className="link" href="#idiomas" onClick={() => setIsActive(false)}>{text.lang}</a>
              </div>
            </li>

            <li>
              <div className="linkContainer separator">
                <i className="icon-job"></i>
                <a className="link" href="#" target="_self" onClick={() => setIsActive(false)}>{text.portf}</a>
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
        <div className="arrowContainer" onClick={toggleDesktopMenu}>
          <i
            className={`arrow ${isArrowHidden ? 'arrow-right' : 'arrow-left'}`}
            id="arrow-menu"
          ></i>
        </div>
      </section>
    </>
  )
}

export default Menu;