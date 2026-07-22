import React from 'react';
import './hero.css';
import { useLanguage } from '../../context/LanguageContext';

const Hero = () => {
  const { data, text: rootText } = useLanguage();
  const text = rootText.contact;
  const g = data.general;

  const contactItems = [
    g.email && (
      <a key='email' href={`mailto:${g.email}`}>
        {g.email}
      </a>
    ),
    g.cellphone && (
      <a key='phone' href={`tel:${g.cellphone.replace(/\s+/g, '')}`}>
        {g.cellphone}
      </a>
    ),
    g.location && <span key='loc'>{g.location}</span>,
    g.linkedin && (
      <a key='in' href={g.linkedin} target='_blank' rel='noreferrer'>
        {text.linkedin}
      </a>
    ),
    g.portfolio && (
      <a key='pf' href={g.portfolio} target='_blank' rel='noreferrer'>
        {text.portfolio}
      </a>
    ),
    g.cv_url && (
      <a key='cv' href={g.cv_url} target='_blank' rel='noreferrer'>
        {text.cv}
      </a>
    )
  ].filter(Boolean);

  return (
    <header id='encabezado' className='hero'>
      <h1 className='hero-name'>{g.fullname}</h1>
      <p className='hero-role'>{g.role}</p>
      <p className='hero-contact'>
        {contactItems.map((item, i) => (
          <React.Fragment key={i}>
            {i > 0 && <span className='sep'> · </span>}
            {item}
          </React.Fragment>
        ))}
      </p>
    </header>
  );
};

export default Hero;
