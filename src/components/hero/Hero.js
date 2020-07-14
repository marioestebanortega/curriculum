import React,{useState} from 'react'
import './hero.css'
//import heroImage from '../../images/hero.jpg'
import {getData,getTextLang} from '../../config'



const Hero= ({lang}) => {
const data =getData(lang);
const text=getTextLang(lang).hero;
return (
    <section id="encabezado" className="hero">
    <div className="container">
      <div className="hero-title">
        <h2>
          {data.general.fullname}
          <br />
          <small
            ><strong>
              {data.general.role}
            </strong></small>
        </h2>
      </div>
      <div className="hero-detail">
        <div className="hero-detail-text">
          <h5>
            {data.general["role-description"]}
            <br />
            <br />
            {text.mail}
            <small><strong>{data.general.email}</strong></small>
            <br />
            {text.cellphone} <small><strong>{data.general.cellphone}</strong></small>
            <br />
            {text.address}
            <small
              ><strong>{data.general.address}</strong></small>
          </h5>
        </div>
        <figure className="hero-imageContainer">
          <img
            className="hero-image"
            src="/public/images/hero.jpg"
            alt="Imagen principal del sitio"
          />
        </figure>
      </div>
      <div className="tool-detail">
        {
           data.general.technologies.map((tech,i)  => {
            return <a key={"icon-tool"+i}
          href={tech.url}
          target="_blank"
        >
          <i className={"icon-"+tech.tech}></i>
           </a>}
           )
        }
      </div>
    </div>
  </section>
)
}
export default Hero;