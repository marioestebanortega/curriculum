import React from 'react'
import { LanguageProvider } from './context/LanguageContext'
import Header from './components/header/Header'
import Menu from './components/menu/Menu'
import Hero from './components/hero/Hero'
import Experience from './components/experience/Experience'
import Certification from './components/certification/Certification'
import Education from './components/education/Education'
import Language from './components/language/Language'
import Footer from './components/footer/Footer'

const AppContent = () => {
    return (
        <>
            <Menu />
            <Header />
            <Hero />
            <Experience />
            <Certification />
            <Education />
            <Language />
            <Footer />
        </>
    )
}

const App = () => {
    return (
        <LanguageProvider>
            <AppContent />
        </LanguageProvider>
    )
}

export default App;
