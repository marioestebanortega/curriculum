import React from 'react'
import './languages.css'
import speaking from '../../images/languages/speaking.png'
import reading from '../../images/languages/reading.png'
import writing from '../../images/languages/writing.png'
import listening from '../../images/languages/listening.png'

const Language =()=>{
    return (
     <section id="idiomas" class="languages">
     <div class="container">
     <h2>Idiomas</h2>
       <div class="language-container">
         <h3><strong>Ingles</strong></h3>
         <div class="languages-detail">
         <article class="language">
         <h4>Speaking</h4>
         <img src={speaking} alt=""/>
         <div class="bar-fill-out">
           <div class="bar-fill-in bar-fill-80">
             <h4>80%</h4>
           </div>
         </div>
       </article>
       <article class="language">
         <h4>Reading</h4>
         <img src={reading} alt=""/>
         <div class="bar-fill-out">
           <div class="bar-fill-in bar-fill-80">
             <h4>80%</h4>
           </div>
         </div>
       </article>
       <article class="language">
         <h4>Writing</h4>
         <img src={writing} alt=""/>
         <div class="bar-fill-out">
           <div class="bar-fill-in bar-fill-80">
             <h4>80%</h4>
           </div>
         </div>
       </article>
       <article class="language">
         <h4>Listening</h4>
         <img src={listening} alt=""/>
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
 
    )

}

export default Language;