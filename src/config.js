import languageSpanish from './translate/spanish.json'
import languageEnglish from './translate/english.json'
import dataSpanish from './translate/iniSpanish.json'
import dataEnglish from './translate/iniEnglish.json'

export const getData=(lang)=>{
    if(lang==='es'){
        return dataSpanish;
    }
    else{
        return dataEnglish;
    }
}
export const getTextLang=(lang)=>{
    if(lang==='es'){
        return languageSpanish;
    }
    else{
        return languageEnglish;
    }
    
}

