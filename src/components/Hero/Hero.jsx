import React from 'react'
import { Carousel } from 'react-bootstrap'
import HeroImg1 from 'images/hero/hero1.jpg'
import HeroImg2 from 'images/hero/hero2.jpg'
import HeroImg3 from 'images/hero/hero3.jpg'
const Hero = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={HeroImg1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={HeroImg2}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={HeroImg3}
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default Hero
