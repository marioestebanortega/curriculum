import React from 'react';
import './profile.css';
import { useLanguage } from '../../context/LanguageContext';

const Profile = () => {
  const { data, text: rootText } = useLanguage();
  const text = rootText.profile;

  return (
    <section id='perfil' className='section profile'>
      <h2 className='section-title'>{text.title}</h2>
      <p className='profile-text'>{data.general['role-description']}</p>
    </section>
  );
};

export default Profile;
