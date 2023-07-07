import React from 'react'
import './Contact.css'
import Twitter from '../../assets/twitter.svg'
import Linkedin from '../../assets/linkedin.svg'
import Instagram from '../../assets/instagram.svg'

const Contact = () => {
  return (
    <div className='con-Container'>
        <div className='Contain'>
            <div className='touch'>
                <div className='talk'>
                    <h1>Let's Talk</h1>
                    <p >You can send me a message by filling the form or you can email me at <a className='form-email' href='https://mail.google.com/mail/?view=cm&to=bgrnaidu%40gmail.com' target='_blanck'>bgrnaidu@gmail.com</a></p>
                    <div className='find-me'> 
                        <p className='form-find'>You Can Find me on</p>
                        <li><a href='https://instagram.com/govardhan_26.07?igshid=ZDc4ODBmNjlmNQ==' target='_blanck'>Instagram <img src={Instagram} alt="Instagram" className='form-icon'/></a></li>
                        <li><a href='https://twitter.com/Govardhan2607?t=x2H5N0d9W68BWSJJFOD4uw&s=09' target='_blanck'>Twitter <img src={Twitter} alt="Twitter" className='form-icon'/></a></li>
                        <li><a href='https://www.linkedin.com/in/govardhan26/' target='_blanck'>Linkedin <img src={Linkedin} alt="Linkedin" className='form-icon'/></a></li>
                    </div>
                </div>
            </div>
            <div className='con-form'>
                <h1 className='form-send'>Send Me a Message</h1>
                <form action="post">
                    <p>Name</p>
                    <input type="Name" placeholder='Your Name' className='form-name'/>
                    <p>Email</p>
                    <input type="Email" placeholder='your@email.com' className='form-email'/>
                    <p>Message</p>
                    <textarea name="message" id="message" cols="30" rows="10" placeholder='Write Here' className='form-message'></textarea>
                    <br/>
                    <input type="Submit" name="Submit" id="submit" className='form-submit'/>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact