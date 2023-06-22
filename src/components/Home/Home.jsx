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
            <p className='name'>Govardhan Rao Naidu Babbadi</p>
            <p className='tag'>I am a Developer who is passionate about Coding...</p>
            </div>
            <div className='icons'>
                <div className='icons-img'>
                <a href="https://github.com/govardhan-26" className='icon' target='_blanck'><img src={Github} alt="Github" /></a>
                <a href="https://twitter.com/Govardhan2607?t=x2H5N0d9W68BWSJJFOD4uw&s=09" className='icon' target='_blanck'><img src={Twitter} alt="Twitter" /></a>
                <a href="https://www.linkedin.com/in/govardhan26/" className='icon' target='_blanck'><img src={Linkedin} alt="Linkedin" /></a>
                <a href="https://mail.google.com/mail/?view=cm&to=bgrnaidu%40gmail.com" className='icon' target='_blanck'><img src={Gmail} alt="Mail" /></a>
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