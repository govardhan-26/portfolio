import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='abt-Container' id='About'>
        <h2 className='abt'>About Me</h2>
        <div className='abt-intro'>
            <p className='intro'>Hi, I am <b>Govardhan Rao Naidu Babbadi</b></p>
            <p className='intro'>I am 4th year Undergraduate <b>Btech</b> Student studying in <b>Indian Institute of Engineering Science and Technology, Shibpur</b>.</p>
            <p className='intro'>I am interested in Development of <b>Web Apps</b> and learning new things. </p>
            
            <h2 className='tech'>Tech Stack</h2>
            <p className='intro'>
              <p><b style={{fontSize: "larger", color : "red"}}>Programming Languages</b> :  C, C++, Python, HTML, CSS, Javascript</p>
              <p><b style={{fontSize: "larger", color : "red"}}>Developer Tools</b> :  Git, Github, Visual Studio Code, Terminal</p>
              <p><b style={{fontSize: "larger", color : "red"}}>Frameworks</b> :  ReactJs, NodeJs, ExpressJs..</p>
            </p>                      
        </div>
    </div>
  )
}

export default About