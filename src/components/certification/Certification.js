import React from 'react'
import '../certification/knowledges.css'
import {getData,getTextLang} from "../../config"


const Certification=()=>{
  const data=getData();
  const text=getTextLang().certification;
    return (
<section id="certificaciones" className="knowledges">
<div className="container">
    <h2>{text.title}</h2>
  <div className="knowledge-detail">
      {data.certification.map((cer,i)=>{
        return(
          <article key={"certif"+cer.certificationId} className="knowledge">
          <div className="knowledge-first">
            <img 
            src={cer.certificationImage} 
            alt="" />
          {cer.certificationUrl&&<a href={cer.certificationUrl} target="_blank"><strong>{cer.certificationUrl}</strong></a>}  
          </div>
          <div className="knowledge-second">
            <p className="knowledge-exp">
        <i className="icon-graduate"><span className="icon-graduate-text"><strong>{cer.certificationName}</strong></span></i>
            </p>
            <div className="knowledge-desc">
             <h5>{text.dateIni} {cer.certificationDateIni}</h5>
             <h5>{text.dateEnd} {cer.certificationDateEnd}</h5>
            </div>
          </div>
        </article>
     
        )
      })}
  
    </div>
  </div>
</section>
    )}

export default Certification;