import React from 'react';
import './skills.css';
import { useLanguage } from '../../context/LanguageContext';

const Skills = () => {
  const { data, text: rootText } = useLanguage();
  const text = rootText.skills;
  const skills = data.skills;

  if (!skills) return null;

  const categories = skills.categories || [];

  return (
    <section id='habilidades' className='section skills'>
      <h2 className='section-title'>{text.title}</h2>

      {categories.map((cat, i) => (
        <div key={'cat-' + i} className='skills-group'>
          <h3 className='skills-label'>{cat.name}</h3>
          <ul className='skills-list'>
            {cat.items.map((item, j) => (
              <li key={'cat-' + i + '-' + j}>{item}</li>
            ))}
          </ul>
        </div>
      ))}

      {skills.soft && skills.soft.length > 0 && (
        <div className='skills-group skills-soft'>
          <h3 className='skills-label'>{text.soft}</h3>
          <ul className='skills-list'>
            {skills.soft.map((skill, i) => (
              <li key={'soft-' + i}>{skill}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default Skills;
