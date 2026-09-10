import React from 'react';
import './profile.css';
import { useLanguage } from '../../context/LanguageContext';

const Profile = () => {
  const { data, text: rootText } = useLanguage();
  const text = rootText.profile;
  // El perfil se escribe en párrafos separados por una línea en blanco
  const paragraphs = data.general['role-description'].split(/\n\s*\n/);

  return (
    <section id='perfil' className='section profile'>
      <h2 className='section-title'>{text.title}</h2>
      {paragraphs.map((paragraph, index) => (
        <p className='profile-text' key={index}>
          {paragraph}
        </p>
      ))}
    </section>
  );
};

export default Profile;
