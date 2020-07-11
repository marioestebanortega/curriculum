import React from 'react';
import image1 from '../../images/education/education_1_utadeo.png'
import image2 from '../../images/education/education_2_unal.png'


const Education = () =>{
return (
    <section id="educacion" class="knowledges">
    <div class="container">
      <h2>Educación</h2>
      <div class="knowledge-detail">
        <article class="knowledge">
          <div class="knowledge-first">
            <img src={image1} alt="" />
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
            <img src={image2} alt="" />
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
       
      </div>
    </div>
  </section>

)
}
export default Education;