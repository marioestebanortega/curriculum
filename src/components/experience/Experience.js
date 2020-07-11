import React from 'react'
import './experience.css'
import experience1 from '../../images/enterprise/enterprise_1_scrd.png'
import experience2 from '../../images/enterprise/enterprise_2_ilumno.png'


const Experience =()=>{
return (
    <section id="experiencia" class="experiences">
    <div class="container">
      <h2>Experiencia laboral</h2>
      <article class="experience">
        <h3 class="experience-enterprise">
          Secretaria distrital de arte cultura y patrimonio
        </h3>
        <div class="experience-all-container">
        <div class="experience-details">
          <h4 class="experience-title">Consultor de software</h4>
          <h6 class="experience-date-init">
            Fecha inicio: Febrero 2018
          </h6>
          <h6 class="experience-date-end">Fecha fin: Actualmente</h6>
          <p class="experience-desc">
            Consultor en solución basada en microservicios para la Secretaria
            distrital , recreación y deporte de Bogotá. Logrando soluciones
            para usuarios de beneficios de adulto mayor BEPS
            <br />
          </p>

          <div class="experience-achievements">
            <h4>Logros</h4>
            <ol>
              <li>
                Diseñar y contruir nuevas herramientas técnologicas en la
                entidad
              </li>
              <li>
                Poner en producción dos aplicaciones basadas en microservicios
              </li>
              <li>
                Lograr integracion a nivel técnica y funcional de los procesos
                manuales para tramites en linea
              </li>
            </ol>
          </div>
          <div class="experience-tools">
            <h4>Técnologias usadas</h4>
            <div class="icon-technologies">
              <a
                href="https://es.wikipedia.org/wiki/Java_(lenguaje_de_programaci%C3%B3n)"
                target="_blank"
              >
                <i class="icon-java"><span>Java</span></i>
              </a>
              <a
                href="https://es.wikipedia.org/wiki/Java_(lenguaje_de_programaci%C3%B3n)"
                target="_blank"
              >
                <i class="icon-spring"><span>Spring Boot</span></i>
              </a>
              <a
                href="https://es.wikipedia.org/wiki/Oracle_Database"
                target="_blank"
                ><i class="icon-oracle"><span>Oracle BD</span></i></a
              >
              <a
                href="https://es.wikipedia.org/wiki/Docker_(software)"
                target="_blank"
                ><i class="icon-docker"><span>Docker</span></i></a
              >
              <a
                href="https://www.ellucian.com/es/soluciones/ellucian-banner"
                target="_blank"
                ><i class="icon-banner"><span>Banner</span></i></a
              >
            </div>
          </div>
        </div>
        <div class="experience-sec2">
          <figure class="experience-imageContainer">
            <img
              class="experience-image"
              src={experience1}
              alt="Consultor"
            />
          </figure>

          <h4 class="experience-info-enterprise">
            <a
              href="https://www.culturarecreacionydeporte.gov.co/"
              target="_blank"
              ><small
                ><strong
                  >https://www.culturarecreacionydeporte.gov.co/</strong
                ></small
              ></a
            >
          </h4>
          <h4 class="experience-info-enterprise">
            <small
              ><strong>Carrera 8 # 9 -83, Bogotá - Colombia </strong></small
            >
          </h4>
          <h4 class="experience-info-enterprise">
            <small><strong>+57-1-3274850</strong></small>
          </h4>
        </div>
      </div>
      </article>
      <article class="experience">
        <h3 class="experience-enterprise">
          Ilumno
        </h3>
        <div class="experience-all-container">
        <div class="experience-details">
          <h4 class="experience-title">Consultor de software</h4>
          <h6 class="experience-date-init">
            Fecha inicio: Febrero 2018
          </h6>
          <h6 class="experience-date-end">Fecha fin: Actualmente</h6>
          <p class="experience-desc">
            Consultor en solución basada en microservicios para la Secretaria
            distrital , recreación y deporte de Bogotá. Logrando soluciones
            para usuarios de beneficios de adulto mayor BEPS
            <br />
          </p>

          <div class="experience-achievements">
            <h4>Logros</h4>
            <ol>
              <li>
                Diseñar y contruir nuevas herramientas técnologicas en la
                entidad
              </li>
              <li>
                Poner en producción dos aplicaciones basadas en microservicios
              </li>
              <li>
                Lograr integracion a nivel técnica y funcional de los procesos
                manuales para tramites en linea
              </li>
            </ol>
          </div>
          <div class="experience-tools">
            <h4>Técnologias usadas</h4>
            <div class="icon-technologies">
              <a
                href="https://es.wikipedia.org/wiki/Java_(lenguaje_de_programaci%C3%B3n)"
                target="_blank"
              >
                <i class="icon-java"><span>Java</span></i>
              </a>
              <a
                href="https://es.wikipedia.org/wiki/Java_(lenguaje_de_programaci%C3%B3n)"
                target="_blank"
              >
                <i class="icon-spring"><span>Spring Boot</span></i>
              </a>
              <a
                href="https://es.wikipedia.org/wiki/Oracle_Database"
                target="_blank"
                ><i class="icon-oracle"><span>Oracle BD</span></i></a
              >
              <a
                href="https://es.wikipedia.org/wiki/Docker_(software)"
                target="_blank"
                ><i class="icon-docker"><span>Docker</span></i></a
              >
              <a
                href="https://www.ellucian.com/es/soluciones/ellucian-banner"
                target="_blank"
                ><i class="icon-banner"><span>Banner</span></i></a
              >
            </div>
          </div>
        </div>
        <div class="experience-sec2">
          <figure class="experience-imageContainer">
            <img
              class="experience-image"
              src={experience2}
              alt="Consultor"
            />
          </figure>

          <h4 class="experience-info-enterprise">
            <a
              href="https://www.culturarecreacionydeporte.gov.co/"
              target="_blank"
              ><small
                ><strong
                  >https://www.culturarecreacionydeporte.gov.co/</strong
                ></small
              ></a
            >
          </h4>
          <h4 class="experience-info-enterprise">
            <small
              ><strong>Carrera 8 # 9 -83, Bogotá - Colombia </strong></small
            >
          </h4>
          <h4 class="experience-info-enterprise">
            <small><strong>+57-1-3274850</strong></small>
          </h4>
        </div>
      </div>
      </article>
    </div>
  </section>

)
}

export default Experience;