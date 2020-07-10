import React from 'react'
import ReactDom from 'react-dom'




const App = ()=>{
return (<>
<i class="icon-menu burger-button" id="burger-menu"></i>
    <section id="seccionMenu" class="menu-container arrow-hide">
      <nav class="menu">
        <ol>
          <li>
            <div class="linkContainer">
              <i class="icon-user"></i>
              <a class="link" href="#encabezado">Perfil</a>
            </div>
          </li>
          <li>
            <div class="linkContainer">
              <i class="icon-job"></i>
              <a class="link" href="#experiencia">Experiencia laboral</a>
            </div>
          </li>
          <li>
            <div class="linkContainer">
              <i class="icon-tools"></i>
              <a class="link" href="#certificaciones">Certificaciones</a>
            </div>
          </li>
          <li>
            <div class="linkContainer">
              <i class="icon-graduate"></i>
              <a class="link" href="#educacion">Educación</a>
            </div>
          </li>
          <li>
            <div class="linkContainer">
              <i class="icon-language"></i>
              <a class="link" href="#idiomas">Idiomas</a>
            </div>
          </li>
        </ol>
      </nav>
      <div class="arrowContainer">
        <i class="arrow arrow-right" id="arrow-menu"></i>
      </div>
    </section>

    <header class="header">
      <div class="container">
        <figure class="logoContainer">
          <img class="logo" src="images/marioLogoNombre2.png" alt="" />
        </figure>
      </div>
    </header>


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
              src="images/mario.jpg"
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
                src="images/enterprise/enterprise_1_scrd.png"
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
                src="images/enterprise/enterprise_2_ilumno.png"
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

     <section id="certificaciones" class="knowledges">
      <div class="container">
        <h2>Certificaciones</h2>
        <div class="knowledge-detail">
          <article class="knowledge">
            <div class="knowledge-first">
              <img src="./images/certification/certification_3_platzi.png" alt="" />
              <a href="https://platzi.com/@maes0186/" target="_blank"><strong>https://platzi.com/@maes0186/</strong></a>
            </div>
            <div class="knowledge-second">
              <p class="knowledge-exp">
                <i class="icon-graduate"><span class="icon-graduate-text"><strong>Certificaciones microservicios</strong></span></i>
              </p>
              <div class="knowledge-desc">
                <h5>Fecha inicio: Febrero 2020</h5>
                <h5>Fecha fin: Actual</h5>
              </div>
            </div>
          </article>
          <article class="knowledge">
            <div class="knowledge-first">
              <img src="./images/certification/certification_1_javaprogrammer.png" alt="" />
            </div>
            <div class="knowledge-second">
              <p class="knowledge-exp">
                <i class="icon-graduate"><span class="icon-graduate-text"><strong>Java Programmer</strong></span></i>
                
              </p>
              <div class="knowledge-desc">
                <h5>Fecha inicio: Junio 2013</h5>
                <h5>Fecha fin: Junio 2013</h5>
              </div>
            </div>
          </article>
    
          <article class="knowledge">
            <div class="knowledge-first">
              <img src="./images/certification/certification_2_sqlcertified.png" alt="" />
            </div>
            <div class="knowledge-second">
              <p class="knowledge-exp">
                <i class="icon-graduate"><span class="icon-graduate-text"><strong>Introduction sql Oracle</strong></span></i>
              </p>
              <div class="knowledge-desc">
                <h5>Fecha inicio: Junio 2013</h5>
                <h5>Fecha fin: Junio 2013</h5>
              </div>
            </div>
          </article>
 
          </div>
        </div>
    </section>

       <section id="educacion" class="knowledges">
      <div class="container">
        <h2>Educación</h2>
        <div class="knowledge-detail">
          <article class="knowledge">
            <div class="knowledge-first">
              <img src="./images/education/education_1_utadeo.png" alt="" />
              <h6 class="knowledge-tech">
                Universidad Jorge Tadeo Lozano
              </h6>
            </div>
            <div class="knowledge-second">
              <p class="knowledge-exp">
                <i class="icon-graduate"><span class="icon-graduate-text"><strong>Especialista en desarrollo bases de datos</strong></span></i>
                
              </p>
              <div class="knowledge-desc">
                <h5>Fecha inicio: Enero 2010</h5>
                <h5>Fecha fin: Febrero 2011</h5>
              </div>
            </div>
          </article>
          <article class="knowledge">
            <div class="knowledge-first">
              <img src="./images/education/education_2_unal.png" alt="" />
              <h6 class="knowledge-tech">
                Universidad Nacional de Colombia
              </h6>
            </div>
            <div class="knowledge-second">
              <p class="knowledge-exp">
                <i class="icon-graduate"><span class="icon-graduate-text"><strong>Ingeniero electrónico</strong></span></i>
                
              </p>
              <div class="knowledge-desc">
                <h5>Fecha inicio: septiembre 2002</h5>
                <h5>Fecha fin: septiembre 2007</h5>
              </div>
            </div>
          </article>
          <article class="knowledge">
            <div class="knowledge-first">
              <img src="./images/education/education_3_csfn.png" alt="" />
              <h6 class="knowledge-tech">
                Colegio San Felipe Neri
              </h6>
            </div>
            <div class="knowledge-second">
              <p class="knowledge-exp">
                <i class="icon-graduate"><span class="icon-graduate-text"><strong>Bachiller</strong></span></i>
                
              </p>
              <div class="knowledge-desc">
                <h5>Fecha inicio: junio 1997 </h5>
                <h5>Fecha fin: septiembre 2002</h5>
              </div>
            </div>
          </article>
          
        </div>
      </div>
    </section>

     <section id="idiomas" class="languages">
      <div class="container">
      <h2>Idiomas</h2>
        <div class="language-container">
          <h3><strong>Ingles</strong></h3>
          <div class="languages-detail">
          <article class="language">
          <h4>Speaking</h4>
          <img src="images/languages/speaking.png" alt=""/>
          <div class="bar-fill-out">
            <div class="bar-fill-in bar-fill-80">
              <h4>80%</h4>
            </div>
          </div>
        </article>
        <article class="language">
          <h4>Reading</h4>
          <img src="images/languages/reading.png" alt=""/>
          <div class="bar-fill-out">
            <div class="bar-fill-in bar-fill-80">
              <h4>80%</h4>
            </div>
          </div>
        </article>
        <article class="language">
          <h4>Writing</h4>
          <img src="images/languages/writing.png" alt=""/>
          <div class="bar-fill-out">
            <div class="bar-fill-in bar-fill-80">
              <h4>80%</h4>
            </div>
          </div>
        </article>
        <article class="language">
          <h4>Listening</h4>
          <img src="images/languages/listening.png" alt=""/>
          <div class="bar-fill-out">
            <div class="bar-fill-in bar-fill-80">
              <h4>80%</h4>
            </div>
          </div>
        </article>
      </div>
          </div>
          </div>
          </section>
  
      <footer class="footer">
      <div class="container">
        <div class="footer-first">
          <p>
            Hoja de vida
            <img src="./images/marioLogo.png" alt="" />
          </p>
        </div>
        <div class="footer-second">
          <p>
            Implementada por <strong><b>Mario Esteban Ortega Garcés</b></strong>
          </p>
        </div>
      </div>
    </footer>
    </>
)

}




export default App;