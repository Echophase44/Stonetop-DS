import React from "react";
import '../styles/homepage.css'
import Hero from '../assets/mainOffice.jpg'
import Logo from "../assets/logo.png"
import WhatWeDo from './section_components/WhatWeDo.jsx'
import About from './section_components/About.jsx'


function Homepage() {
  return (
    <>
      <section className="home_hero-container">
        <img className="home_hero" src={Hero} alt="Office" />
        <img className="home_logo" src={Logo} alt="Company Logo" />
        <div className="home_title">Stonetop Financial</div>
      </section>
      <WhatWeDo />
      <About />
    </>
  )
}

export default Homepage