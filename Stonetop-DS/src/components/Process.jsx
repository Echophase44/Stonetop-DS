import React from "react";
import '../styles/process.css'
import arrow from '../assets/right-arrow.png'
import check from '../assets/check.png'
import Navbar from "./Navbar";
import Footer from "./section_components/Footer";

function Process () {
  return(
    <div className="process-page">
      <Navbar />

      <div className="process-bannerContainer">
        <h1 className="process-bannerTitle">OUR PROCESS</h1>
      </div>

      <section className="process-cardMain">
        <p className="process-cardInfo">The chart below shows a little more about what you will go through as a client of Stonetop Financial Solutions.  Our many years of debt settlement experience will be put to work for you to ensure you receive the best possible financial outcome.</p>
        <div className="process-cardContainer">
          <div className="process-card">
            <h2>Initial Call</h2>
            <span>The call is FREE! We learn about your situation and discover your options.</span>
            <img className="process-arrowImg" src={arrow} alt="" />
          </div>

          <div className="process-card">
            <h2>Client Packet</h2>
            <span >After enrollment, you will receive our program welcome packet.</span>
            <img className="process-arrowImg" src={arrow} alt="" />
          </div>

          <div className="process-card">
            <h2>Negotiations</h2>
            <span>We begin to negotiate your debt.</span>
            <img className="process-arrowImg" src={arrow} alt="" />
          </div>

          <div className="process-card">
            <h2>Settlement</h2>
            <span>We obtain the best settlement possible with your creditors.</span>
            <img className="process-checkImg" src={check} alt="" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Process