import React from 'react';
import './languages.css';
import { useLanguage } from '../../context/LanguageContext';

const Language = () => {
  const { data, text: rootText } = useLanguage();
  const text = rootText.language;
  const languages = data.languages || [];

  return (
    <section id='idiomas' className='section languages'>
      <h2 className='section-title'>{text.title}</h2>
      <ul className='entry-list'>
        {languages.map((lng, i) => (
          <li key={'lang' + i} className='entry entry-inline'>
            <span className='entry-title'>{lng.name}</span>
            <span className='entry-dates'>{lng.level}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Language;
