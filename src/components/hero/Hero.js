import React from 'react'
import './hero.css'
import { useLanguage } from '../../context/LanguageContext';

const Hero = () => {
  const { data, text: rootText } = useLanguage();
  const text = rootText.hero;

  return (
    <section id="encabezado" className="hero">
      <div className="container">
        <div className="hero-title">
          <h2>
            {data.general.fullname}
            <br />
            <small><strong>
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
              <small><strong>{data.general.address}</strong></small>
              <br />

              <a className="hero-link-container" href={data.general.cv_url}>
                <small><strong className="link-url">{data.general.cv_url}</strong></small></a>
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
        {data.general.show_technologies === true ? <div className="tool-detail">
          {
            data.general.technologies.map((tech, i) => {
              return <a key={"icon-tool" + i}
                href={tech.url}
                target="_blank"
              >
                <i className={"icon-" + tech.tech}></i>
              </a>
            }
            )
          }
        </div> : <></>}
      </div>
    </section>
  )
}
export default Hero;