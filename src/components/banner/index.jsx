import React from 'react'
import c from './banner.module.scss'
import bannerIcon from '../../icons/memoji/image.jpg'

import instagram from '../../icons/social/instagram.svg'
import telegram from '../../icons/social/telegram.svg'
import linkedin from '../../icons/social/Linkedin.svg'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className={c.banner__container}>
      <div className={c.banner}>
        <h1>Нi my name is Erkin I am a web developer</h1>
        <div className={c.biography}>
          <div className={c.icon}>
            <div className={c.image}>
              <img  
                src={bannerIcon}
                alt="✌️"
              />
            </div>
          </div>
          <div className={c.info}>
            <h3>Biography</h3>
            <p>
            My name is Erkin Kenenbaev, and I am a second-year student at the International College of IT and Business at Salymsbekov University. I specialize in the field of IT and possess skills in programming languages such as HTML, CSS, Python, and React. Over the past year, I have successfully completed two projects. I am constantly striving to develop and refine my skills in this area, aiming to contribute to the world of technology and innovation.            
            </p>
          </div>
          <div className={c.socials}>
            <h3>
              Lets connect
            </h3>
            <div className={c.icons}>
              <div>
                <Link to={'https://instagram.com/kanatbekovv_77'}>
                  <img 
                    src={instagram} 
                    alt="instagram"
                  />
                </Link>
              </div>
              <div>
                <Link to={'https://instagram.com/kanatbekovv_77'}>
                  <img 
                    src={telegram}
                    alt="instagram"
                  />
                </Link>
              </div>
              <div>
                <Link to={'https://instagram.com/kanat'}>
                  <img 
                    src={linkedin}
                    alt="instagram"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner