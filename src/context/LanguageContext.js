import React, { createContext, useState, useEffect, useContext } from 'react';
import { getTextLang, getData } from '../config';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('es');

  useEffect(() => {
    const browserLang = navigator.language;
    if (browserLang.includes('en')) {
      setLang('en');
    } else {
      setLang('es');
    }
  }, []);

  const value = {
    lang,
    setLang,
    text: getTextLang(lang),
    data: getData(lang)
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
