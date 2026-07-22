import React from 'react';
import './certification.css';
import { useLanguage } from '../../context/LanguageContext';

const Certification = () => {
  const { data, text: rootText } = useLanguage();
  const text = rootText.certification;

  return (
    <section id='certificaciones' className='section certifications'>
      <h2 className='section-title'>{text.title}</h2>
      <ul className='entry-list'>
        {data.certification.map((cer) => (
          <li key={'certif' + cer.certificationId} className='entry'>
            <div className='entry-main'>
              <h3 className='entry-title'>{cer.certificationName}</h3>
              {cer.certificationIssuer && (
                <p className='entry-sub'>
                  {cer.certificationUrl ? (
                    <a href={cer.certificationUrl} target='_blank' rel='noreferrer'>
                      {cer.certificationIssuer}
                    </a>
                  ) : (
                    cer.certificationIssuer
                  )}
                </p>
              )}
            </div>
            <p className='entry-dates'>{cer.certificationDateEnd}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Certification;
