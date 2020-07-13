import React from 'react';
import { getData,getTextLang } from '../../config'


const Education = () =>{
  const data=getData();
  const text=getTextLang().education;
return (
    <section id="educacion" className="knowledges">
    <div className="container">
      <h2>{text.title}</h2>
      <div className="knowledge-detail">
        {data.education.map((edu,i)=>{
          return(  <article key={"educ"+i} className="knowledge">
          <div className="knowledge-first">
            <img 
            src={edu.educationImage} 
             alt="" />
            <h6 className="knowledge-tech">
              {edu.educationName}
            </h6>
          </div>
          <div className="knowledge-second">
            <p className="knowledge-exp">
        <i className="icon-graduate"><span className="icon-graduate-text"><strong>{edu.educationTitle}</strong></span></i>
              
            </p>
            <div className="knowledge-desc">
        <h5>{text.dateIni} {edu.educationDateIni}</h5>
        <h5>{text.dateEnd} { edu.educationDateEnd}</h5>
            </div>
          </div>
        </article>
      );
        })}
      
      </div>
    </div>
  </section>

)
}
export default Education;