import React from "react"
import { Parallax } from "react-parallax";
import splashImg from '../../assets/mainOffice.jpg'

function Hero () {
  return (
      <Parallax speed={-50} className="home_hero" bgImage={splashImg} strength={250}>
       <h1 className="hero_title">Give your debt the best solution.</h1>
      </Parallax>
  )
}

export default Hero