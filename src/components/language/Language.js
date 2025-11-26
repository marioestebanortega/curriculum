import React from 'react'
import './languages.css'
import { useLanguage } from '../../context/LanguageContext';

const Language = () => {
  const { text: rootText } = useLanguage();
  const text = rootText.language;
  return (
    <section id="idiomas" className="languages">
      <div className="container">
        <h2>{text.title}</h2>
        <div className="language-container">
          <h3><strong>{text.englishName}</strong></h3>
          <div className="languages-detail">
            <article className="language">
              <h4>{text.speaking}</h4>
              <img
                src="/public/images/languages/speaking.png"
                alt=""
                loading="lazy"
              />
              <div className="bar-fill-out">
                <div className="bar-fill-in bar-fill-80">
                  <h4>80%</h4>
                </div>
              </div>
            </article>
            <article className="language">
              <h4>{text.reading}</h4>
              <img
                src="/public/images/languages/reading.png"
                alt=""
                loading="lazy"
              />
              <div className="bar-fill-out">
                <div className="bar-fill-in bar-fill-80">
                  <h4>80%</h4>
                </div>
              </div>
            </article>
            <article className="language">
              <h4>{text.writing}</h4>
              <img
                src="/public/images/languages/writing.png"
                alt=""
                loading="lazy"
              />
              <div className="bar-fill-out">
                <div className="bar-fill-in bar-fill-80">
                  <h4>80%</h4>
                </div>
              </div>
            </article>
            <article className="language">
              <h4>{text.listening}</h4>
              <img
                src="/public/images/languages/listening.png"
                alt=""
                loading="lazy"
              />
              <div className="bar-fill-out">
                <div className="bar-fill-in bar-fill-80">
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