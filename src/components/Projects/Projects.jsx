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
    <div className='pro-Container'>
        <div className="projects">
            <div className="project-list">
                <div className='list'>
                <h3>Projects</h3>
                <ol>
                    <li><a href="https://github.com/govardhan-26/Disneyplus-Hotstar-Clone.git" target='_blanck'>Disney+ Hotstar Clone</a></li>
                    <li><a href="https://github.com/govardhan-26/restaurant-website.git" target='_blanck'>Restaurant Website</a></li>
                    <li><a href="https://github.com/govardhan-26/portfolio.git" target='_blanck'>Portfolio</a></li>
                </ol>
                </div>
            </div>
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
        </div>        
    </div>
  )
}

export default Projects