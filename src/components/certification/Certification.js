import React from 'react'
import '../certification/knowledges.css'
import certification3 from '../../images/certification/certification_3_platzi.png'
import certification2 from '../../images/certification/certification_2_sqlcertified.png'
import certification1 from '../../images/certification/certification_1_javaprogrammer.png'



const Certification=()=>{
    return (
<section id="certificaciones" class="knowledges">
<div class="container">
  <h2>Certificaciones</h2>
  <div class="knowledge-detail">
    <article class="knowledge">
      <div class="knowledge-first">
        <img src={certification3} alt="" />
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
        <img src={certification1} alt="" />
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
        <img src={certification2} alt="" />
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
    )}

export default Certification;