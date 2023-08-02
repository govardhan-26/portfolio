import React from 'react'
import './Home.css'
import Govardhan from '../../assets/Govardhan.JPG'
import Github from '../../assets/github.svg'
import Twitter from '../../assets/twitter.svg'
import Linkedin from '../../assets/linkedin.svg'
import Gmail from '../../assets/gmail.svg'

const Home = () => {
  return (
    <div className='Container' id='Home'>
        <div className='details'>
            <div className='Name'>
            <p className='greet'>Hello World!  My Name is </p>  
            <div className='name'>
                <span class="block"></span>  
                <p>Govardhan Rao Naidu<span></span></p>
            </div>
            <div class="tag">
                <div class="block"></div>
                <p>I am a Developer...</p>
            </div>
            </div>
            <div className='icons'>
                <div className='icons-img'>
                <a href="https://github.com/govardhan-26" className='icon' target='_blanck'><img src={Github} alt="Github" /></a>
                <a href="https://twitter.com/Govardhan2607?t=x2H5N0d9W68BWSJJFOD4uw&s=09" className='icon' target='_blanck'><img src={Twitter} alt="Twitter" /></a>
                <a href="https://www.linkedin.com/in/govardhan26/" className='icon' target='_blanck'><img src={Linkedin} alt="Linkedin" /></a>
                <a href="https://mail.google.com/mail/?view=cm&to=bgrnaidu%40gmail.com" className='icon' target='_blanck'><img src={Gmail} alt="Mail" /></a>
                </div>
                <div className='resume'>
                    <div className='res'><a href="https://drive.google.com/file/d/14Pb9NhezoU60QA4hoFthHWoOXUF328yL/view?usp=sharing" target = "_blank">Resume</a></div>
                    <div className='res'><a href="https://mail.google.com/mail/?view=cm&to=bgrnaidu%40gmail.com" target = "_blank">Hire Me</a></div>
                </div>
            </div>
        </div>
        <div className='pic'>
            <img src={Govardhan}/>
        </div>
    </div>
  )
}

export default Home