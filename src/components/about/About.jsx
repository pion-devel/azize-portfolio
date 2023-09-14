import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know </h5>
      <h2>About Me</h2>
      <div className="container about__container">
          <div className="about__me">
              <div className="about__me-image">
                <img src= {ME} alt ="About Image"/>
              </div>
          </div>

         <div className="about__content">
          <div className="about__cards">

          <article className="about__card">
          <FaAward className='about__icon'/>
          <h5>Experience</h5>
          <small>+2 years working</small>
          </article>

          <article className="about__card">
          <FiUsers className='about__icon'/>
          <h5>Clients</h5>
          <small>5+ Worldwide</small>
          </article>

          <article className="about__card">
          <VscFolderLibrary className='about__icon'/>
          <h5>Projects</h5>
          <small>15+ Completed</small>
          </article>
          </div>

          <p>
          I have always been interested in programming and the logic behind it. After my Baccalaureate I continued my studies in this field. I am looking for a challenging position which will allow me to gain skills and also experience, my adaptability and my sense of teamwork guarantee that I will integrate quickly into my new team.
          </p>

            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
          </div>
      </div>
    </section>
  )
}

export default About