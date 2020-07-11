import React from 'react'
import './hero.css'
import heroImage from '../../images/mario.jpg'


const Hero= () => {
return (
    <section id="encabezado" class="hero">
    <div class="container">
      <div class="hero-title">
        <h2>
          Mario Esteban Ortega Garcés
          <br />
          <small
            ><strong>
              Arquitecto y consultor de software
            </strong></small
          >
        </h2>
      </div>
      <div class="hero-detail">
        <div class="hero-detail-text">
          <h5>
            Soy una persona apasionada de la tecnología, quien busca constante
            crecimiento y quien nunca para de aprender. He desempeñado roles
            de alta responsabilidad en soluciones de ingeniería de software,
            liderando y definiendo arquitecturas de proyectos con variedad de
            necesidades tales como disponibilidad de usuarios, concurrencia,
            integraciones, entre otras. Me encuentro enfocado en brindar
            soluciones con arquitectura de microservicios que involucren
            tecnologías : React, Spring Boot, Docker , Kubernetes
            <br />
            <br />
            Email:
            <small><strong>mario.esteban.ortega@gmail.com</strong></small>
            <br />
            Celular: <small><strong>+57 3103096818</strong></small>
            <br />
            Dirección:
            <small
              ><strong>Carrera 11 # 140 -52, Bogotá - Colombia</strong></small
            >
          </h5>
        </div>
        <figure class="hero-imageContainer">
          <img
            class="hero-image"
            src={heroImage}
            alt="Imagen principal del sitio"
          />
        </figure>
      </div>
      <div class="tool-detail">
        <a
          href="https://es.wikipedia.org/wiki/Java_(lenguaje_de_programaci%C3%B3n)"
          target="_blank"
        >
          <i class="icon-java"></i>
        </a>
        <a
          href="https://es.wikipedia.org/wiki/Spring_Framework"
          target="_blank"
        >
          <i class="icon-spring"></i>
        </a>
        <a
          href="https://es.wikipedia.org/wiki/Eclipse_(software)"
          target="_blank"
        >
          <i class="icon-eclipseide"></i>
        </a>
        <a href="https://es.wikipedia.org/wiki/Git" target="_blank">
          <i class="icon-git"></i>
        </a>
        <a
          href="https://es.wikipedia.org/wiki/Amazon_Web_Services"
          target="_blank"
        >
          <i class="icon-amazonaws"></i>
        </a>
        <a href="https://es.qwe.wiki/wiki/Oracle_Database" target="_blank">
          <i class="icon-oracle"></i>
        </a>
        <a href="https://es.wikipedia.org/wiki/MySQL" target="_blank">
          <i class="icon-mysql"></i>
        </a>
        <a href="https://es.wikipedia.org/wiki/PostgreSQL" target="_blank">
          <i class="icon-postgresql"></i>
        </a>
        <a
          href="https://es.wikipedia.org/wiki/Hoja_de_estilos_en_cascada"
          target="_blank"
        >
          <i class="icon-css3"></i>
        </a>
        <a
          href="https://es.wikipedia.org/wiki/Bootstrap_(framework)"
          target="_blank"
        >
          <i class="icon-bootstrap"></i>
        </a>
        <a href="https://es.wikipedia.org/wiki/HTML5" target="_blank">
          <i class="icon-html5"></i>
        </a>
        <a href="https://es.wikipedia.org/wiki/JavaScript" target="_blank">
          <i class="icon-javascript"></i>
        </a>
        <a href="https://es.wikipedia.org/wiki/React" target="_blank">
          <i class="icon-react"></i>
        </a>
        <a
          href="https://es.wikipedia.org/wiki/Redux_(JavaScript)"
          target="_blank"
        >
          <i class="icon-redux"></i>
        </a>
        <a
          href="https://es.wikipedia.org/wiki/Docker_(software)"
          target="_blank"
        >
          <i class="icon-docker"></i>
        </a>
        <a href="https://es.wikipedia.org/wiki/Kubernetes" target="_blank">
          <i class="icon-kubernetes"></i>
        </a>
        <a href="https://es.wikipedia.org/wiki/Jenkins" target="_blank">
          <i class="icon-jenkins"></i>
        </a>
        <a
          href="https://en.wikipedia.org/wiki/Jest_(JavaScript_framework)"
          target="_blank"
        >
          <i class="icon-jest"></i>
        </a>
        <a href="https://es.wikipedia.org/wiki/Raspberry_Pi" target="_blank">
          <i class="icon-raspberrypi"></i>
        </a>
      </div>
    </div>
  </section>
)
}
export default Hero;