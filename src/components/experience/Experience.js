import React from 'react'
import './experience.css'
import { useLanguage } from '../../context/LanguageContext';

const Experience = () => {
  const { data, text: rootText } = useLanguage();
  const text = rootText.experience;

  return (
    <section id="experiencia" className="experiences">
      <div className="container">
        <h2>{text.title}</h2>

        {
          data.experience.map((exp, i) => {
            return (
              <article key={"exp" + i} className="experience">
                <h3 className="experience-enterprise">
                  {exp.enterpriseName}
                </h3>
                <div className="experience-all-container">
                  <div className="experience-details">
                    <h4 className="experience-title">  {exp.position}</h4>
                    <h6 className="experience-date-init">
                      {text.dateIni}   {exp.dateIni}
                    </h6>
                    <h6 className="experience-date-end">{text.dateEnd}   {exp.dateEnd}</h6>
                    <p className="experience-desc">
                      {exp.expDesc}
                      <br />
                    </p>

                    <div className="experience-achievements">
                      <h4>{text.ahievements}</h4>
                      <ol>
                        {exp.achievements.map((ahievement, j) => {
                          return (<li key={"achiev-" + exp.experienceId + "-" + j}>{ahievement}</li>)
                        })
                        }
                      </ol>
                    </div>
                    <div className="experience-tools">
                      <h4>{text.usedTech}</h4>
                      <div className="icon-technologies">

                        {
                          exp.technologies.map((tech, k) => {
                            return <a key={"techUsed-" + exp.experienceId + "-" + k}
                              href={tech.url}
                              target="_blank"
                            >
                              <i className={"icon-" + tech.tech}><span>{tech.name}</span></i>
                            </a>
                          }
                          )
                        }
                      </div>
                    </div>
                  </div>
                  <div className="experience-sec2">
                    <figure className="experience-imageContainer">
                      <img
                        className="experience-image"
                        src={exp.enterpriseImage}
                        alt="Ingeniero de Software"
                        loading="lazy"
                      />
                    </figure>

                    <h4 className="experience-info-enterprise">
                      <a
                        href={exp.enterpriseUrl}
                        target="_blank"
                      ><small
                      >
                          {exp.enterpriseUrl}</small></a>
                    </h4>
                    <h4 className="experience-info-enterprise">
                      <small
                      >{exp.enterpriseAddress}</small>
                    </h4>
                    <h4 className="experience-info-enterprise">
                      <small>{exp.enterprisePhone}</small>
                    </h4>
                  </div>
                </div>
              </article>
            )
          }
          )
        }


      </div>
    </section>

  )
}

export default Experience;