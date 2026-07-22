import React from 'react';
import './experience.css';
import { useLanguage } from '../../context/LanguageContext';

const Experience = () => {
  const { data, text: rootText } = useLanguage();
  const text = rootText.experience;

  const detailed = data.experience.filter((exp) => !exp.compact);
  const compact = data.experience.filter((exp) => exp.compact);

  return (
    <section id='experiencia' className='section experiences'>
      <h2 className='section-title'>{text.title}</h2>

      {detailed.map((exp, i) => (
        <article key={'exp' + i} className='experience'>
          <div className='experience-head'>
            <div className='experience-head-main'>
              <h3 className='experience-position'>{exp.position}</h3>
              <p className='experience-company'>
                {exp.enterpriseUrl ? (
                  <a href={exp.enterpriseUrl} target='_blank' rel='noreferrer'>
                    {exp.enterpriseName}
                  </a>
                ) : (
                  exp.enterpriseName
                )}
                {exp.enterpriseAddress && /remot/i.test(exp.enterpriseAddress) && (
                  <span className='experience-place'> · {exp.enterpriseAddress}</span>
                )}
              </p>
            </div>
            <p className='experience-dates'>
              {exp.dateIni} – {exp.dateEnd}
              {exp.modality && <span className='experience-modality'>{exp.modality}</span>}
            </p>
          </div>

          {exp.expDesc && <p className='experience-desc'>{exp.expDesc}</p>}

          {exp.achievements && exp.achievements.length > 0 && (
            <ul className='experience-achievements'>
              {exp.achievements.map((achievement, j) => (
                <li key={'achiev-' + i + '-' + j}>{achievement}</li>
              ))}
            </ul>
          )}

          {exp.technologies && exp.technologies.length > 0 && (
            <p className='experience-tech'>
              <span className='experience-tech-label'>{text.usedTech}: </span>
              {exp.technologies.map((tech) => tech.name).join(' · ')}
            </p>
          )}
        </article>
      ))}

      {compact.length > 0 && (
        <ul className='experience-compact-list'>
          {compact.map((exp, i) => (
            <li key={'expc' + i} className='experience-compact'>
              <span className='experience-compact-role'>
                <strong>{exp.position}</strong>
                {' · '}
                {exp.enterpriseUrl ? (
                  <a href={exp.enterpriseUrl} target='_blank' rel='noreferrer'>
                    {exp.enterpriseName}
                  </a>
                ) : (
                  exp.enterpriseName
                )}
              </span>
              <span className='experience-dates'>
                {exp.dateIni} – {exp.dateEnd}
              </span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Experience;
