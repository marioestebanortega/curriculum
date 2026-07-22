import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import Hero from './components/hero/Hero';
import Profile from './components/profile/Profile';
import Experience from './components/experience/Experience';
import Skills from './components/skills/Skills';
import Education from './components/education/Education';
import Language from './components/language/Language';
import Certification from './components/certification/Certification';
import Footer from './components/footer/Footer';

const AppContent = () => {
  return (
    <>
      <Header />
      <Menu />
      <main className='cv'>
        <Hero />
        <Profile />
        <Experience />
        <Skills />
        <Education />
        <Language />
        <Certification />
      </main>
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
