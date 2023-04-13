import React from "react";
import girlThree from '../../assets/workingGirl3.jpg'

function About(){
  return(
    <section className="home_about-main">

        <div className="about-cards"> 
          <h2 className="home_about-title">ABOUT</h2>

          <div className="home_about-contentContainer">
            <img src="" alt="" />
            <div className="about-cardText">
              <span>What Makes Us Unique</span>
              <p>Stonetop Financial Solutions is a leader in the debt relief industry. We offer FTC-compliant, performance based, debt relief.</p>
              <p>At Stonetop Solutions, we always have our customer's best interest at heart and are not afraid to base our fees on performance.  We look forward to working with you to achieve the best result possible.</p>
            </div>
          </div>

          <div className="home_about-contentContainer">
            <img src="" alt="" />
            <div className="about-cardText">
              <span>What does FTC-compliant, performance based debt relief mean?</span>
              <p>Prior to October of 2010, most debt settlement companies charged fees before they actually settled any of your debts. The funds designated for creditors were taken out as company fees making it hard to settle debts quickly.</p>
              <p>As a result of consumer complaints, the FTC made a change to the Telemarketing Sales Rule (TSR) to make it illegal to charge the consumer a fee until the company settled a debt. This change went into effect at the end of October 2010.</p>
            </div>
          </div>

          <div className="home_about-contentContainer">
            <img src="" alt="" />
            <div className="about-cardText">
              <span>Benefits of Settlement</span>
              <p>Pay less than what you owe. After saving money for several weeks or months, our negotiators will communicate and structure a settlement with your creditors so that they agree to accept an amount less than what you owe.</p>
              <p>Get relief from harassing phone calls.  While you are our client, we do all the communicating on your behalf. Simply refer your creditors to us and let us take it from there.</p>
            </div>
          </div>
        </div>

        <img className="home_about-img" src={girlThree} alt="" />
    </section>
  )
}

export default About