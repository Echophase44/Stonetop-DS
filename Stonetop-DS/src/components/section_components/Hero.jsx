import React from "react"
import { Parallax } from "react-parallax";
import splashImg from '../../assets/mainOffice.jpg'

function Hero () {
  return (
      <Parallax speed={-50} className="home_hero" bgImage={splashImg} strength={250}></Parallax>
  )
}

export default Hero