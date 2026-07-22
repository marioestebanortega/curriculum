import React from 'react';
import './header.css';
import { useLanguage } from '../../context/LanguageContext';

const Header = () => {
  const { lang, setLang, text } = useLanguage();

  const selectLang = (event) => {
    setLang(event.target.value);
  };

  return (
    <div className='topbar'>
      <div className='topbar-inner'>
        <label className='lang-label' htmlFor='si-select-language'>
          {text.general.language}
        </label>
        <select name='language' id='si-select-language' value={lang} onChange={selectLang}>
          <option value='es'>Español</option>
          <option value='en'>English</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
