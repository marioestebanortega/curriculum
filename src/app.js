import React from 'react'
import Header from './components/header/Header'
import Menu from './components/menu/Menu'
import Hero from './components/hero/Hero'
import Experience from './components/experience/Experience'
import Certification from './components/certification/Certification'
import Education from './components/education/Education'
import Language from './components/language/Language'
import Footer from './components/footer/Footer'
const App = ()=>{
return (<>
<i className="icon-menu burger-button" id="burger-menu"></i>
    <Menu/>
    <Header/>
    <Hero/>
    <Experience/>
    <Certification/>
    <Education/>
    <Language/>
    <Footer/>
</>
)

}
export default App;
