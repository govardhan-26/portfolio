import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='abt-Container'>
        <div className='abt-intro'>
            <h2>About Me</h2>
            <p className='intro'>Hi, I am Govardhan Rao Naidu Babbadi</p>
            <p className='intro'>I am 4th year Undergraduate <b>Btech</b> Student studying in <b>Indian Institute of Engineering Science and Technology, Shibpur</b>.</p>
            <p className='intro'>I am interested in Development of <b>Web Apps</b> and learning new things. </p>
            <h2>Tech Stack</h2>
            <p className='intro'>
              <p><b style={{fontSize: "larger"}}>Programming Languages</b> :  C, C++, Python, HTML, CSS, Javascript</p>
              <p><b style={{fontSize: "larger"}}>Developer Tools</b> :  Git, Github, Visual Studio Code, Terminal</p>
              <p><b style={{fontSize: "larger"}}>Frameworks</b> :  ReactJs, NodeJs, ExpressJs..</p>
            </p>                      
        </div>
    </div>
  )
}

export default About