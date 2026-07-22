import React, { useState, useEffect } from 'react';
import './menu.css';
import { useLanguage } from '../../context/LanguageContext';

const Menu = () => {
  const { text: rootText } = useLanguage();
  const text = rootText.menu;
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '#perfil', label: text.profile },
    { href: '#experiencia', label: text.exp },
    { href: '#habilidades', label: text.skills },
    { href: '#educacion', label: text.education },
    { href: '#idiomas', label: text.lang },
    { href: '#certificaciones', label: text.certif }
  ];

  const handlePrint = () => window.print();
  const close = () => setIsOpen(false);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (isOpen && !e.target.closest('.nav') && !e.target.closest('.nav-toggle')) {
        setIsOpen(false);
      }
    };
    document.body.addEventListener('click', onClickOutside);
    return () => document.body.removeEventListener('click', onClickOutside);
  }, [isOpen]);

  return (
    <>
      <button
        type='button'
        className='nav-toggle'
        aria-label='Menu'
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`nav ${isOpen ? 'is-open' : ''}`}>
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={close}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button type='button' className='nav-print' onClick={handlePrint}>
          {text.print}
        </button>
      </nav>
    </>
  );
};

export default Menu;
