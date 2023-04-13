import React from "react";
import heroImg from '../../assets/mainOffice.jpg'
import Logo from "../../assets/logo.png"

function Hero () {
  return (
    <section className="home_hero-container">
        <img className="home_hero" src={heroImg} alt="Office" />
        <img className="home_logo" src={Logo} alt="Company Logo" />
        <div className="home_title">Stonetop Financial</div>
    </section>
  )
}

export default Hero