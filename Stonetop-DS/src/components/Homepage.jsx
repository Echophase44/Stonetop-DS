import React from "react";
import '../styles/homepage.css'

import Navbar from "./Navbar";
import Hero from './section_components/Hero.jsx'
import WhatWeDo from './section_components/WhatWeDo.jsx'
import About from './section_components/About.jsx'
import Contact from './section_components/Contact.jsx'
import Footer from './section_components/Footer.jsx'



function Homepage() {
  return (
    <>
    <Navbar/>
      <Hero />
      <WhatWeDo />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default Homepage