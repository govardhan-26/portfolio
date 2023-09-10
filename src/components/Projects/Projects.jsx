import React from 'react'
import './Projects.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import portfolio from '../../assets/portfolio.png'
import Restaurant from '../../assets/Restaurant.png'
import disney from '../../assets/disney.png'

const Projects = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };
  return (
    <div className='pro-Container' id='Projects'>
        <div className="projects">
            <div className="project-slide">
                <Slider {...settings} className='slider'>
                    <div className='wrap'>
                        <a href="https://github.com/govardhan-26/Disneyplus-Hotstar-Clone.git" target='_blanck'>
                        <img src={disney} alt="" />
                        </a>
                    </div>

                    <div className='wrap'>
                        <a href="https://github.com/govardhan-26/restaurant-website.git" target='_blanck'>
                        <img src={Restaurant} alt="" />
                        </a>
                    </div>
                    

                    <div className='wrap'>
                        <a href="https://github.com/govardhan-26/portfolio.git" target='_blanck'>
                        <img src={portfolio} alt="" />
                        </a>
                    </div>
                </Slider>
            </div>
            <div className="project-list">
                <h2>Projects</h2>
                <div className='project'>
                    <h3 style={{ textAlign : "center" }}>Disney+Hotstar Clone</h3>
                    <p>A web application designed to replicate the Disney+ Hotstar streaming platform's user interface. </p>
                    <a href='https://disneyplus-hotstar-clone.vercel.app/' target='_blanck' className='pro-link'>View Project</a>
                    <p><b>Tech Stack Used :</b> ReactJs, ReduxJs, Firebase</p>

                </div>
                <div className='project'>
                    <h3 style={{ textAlign : "center" }}>Restaurant Website</h3>
                    <p>A visually appealing static website for managing a Restaurant with pages for menu, contact and about Restaurant.</p>
                    <a href='https://restaurent-website.vercel.app/' target='_blanck' className='pro-link'>View Project</a>
                    <p><b>Tech Stack Used :</b> ReactJs, CSS</p>
                </div>
                <div className='project'>
                    <h3 style={{ textAlign : "center" }}>Personal Portfolio</h3>
                    <p>A web application which showcases my work, my education and everything about me.</p>
                    <a href='http://govardhan26.vercel.app/' target='_blanck' className='pro-link'>View Project</a>
                    <p><b>Tech Stack Used :</b> ReactJs, CSS</p>
                </div>
            </div>
        </div>        
    </div>
  )
}

export default Projects