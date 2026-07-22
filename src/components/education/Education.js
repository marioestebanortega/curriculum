import React from 'react';
import './education.css';
import { useLanguage } from '../../context/LanguageContext';

const Education = () => {
  const { data, text: rootText } = useLanguage();
  const text = rootText.education;

  return (
    <section id='educacion' className='section education'>
      <h2 className='section-title'>{text.title}</h2>
      <ul className='entry-list'>
        {data.education.map((edu, i) => (
          <li key={'educ' + i} className='entry'>
            <div className='entry-main'>
              <h3 className='entry-title'>{edu.educationTitle}</h3>
              <p className='entry-sub'>{edu.educationName}</p>
            </div>
            <p className='entry-dates'>
              {edu.educationDateIni} – {edu.educationDateEnd}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Education;
