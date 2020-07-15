import React,{useState,useEffect} from 'react'
import Header from './components/header/Header'
import Menu from './components/menu/Menu'
import Hero from './components/hero/Hero'
import Experience from './components/experience/Experience'
import Certification from './components/certification/Certification'
import Education from './components/education/Education'
import Language from './components/language/Language'
import Footer from './components/footer/Footer'

const App = ()=>{
    const [lang,setLang]=useState({});
return (<>
<i className="icon-menu burger-button" id="burger-menu"></i>


    <Menu lang={lang}/>
    <Header lang={lang} setLang={setLang}/>
    <Hero lang={lang}/>
    <Experience lang={lang}/>
    <Certification lang={lang}/>
    <Education lang={lang}/>
    <Language lang={lang}/>
    <Footer lang={lang}/>
</>
)

}
export default App;
