import iniJson from './ini.json'
import languageSpanish from './translate/spanish.json'
import languageEnglish from './translate/english.json'

export const getData=()=>{
    return iniJson;
}
export const getTextLang=()=>{
    if(navigator.language==='es'){
        return languageSpanish;
    }
    else{
        return languageEnglish;
    }
    
}

