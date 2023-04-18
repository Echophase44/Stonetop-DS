import React from "react";
import { useState } from "react";
import girlThree from '../../assets/workingGirl3.jpg'

function About(){
  const [cards, setCards] = useState([
    {
      title: "What Makes Us Unique?",
      paraOne: "Stonetop Financial Solutions is a leader in the debt relief industry. We offer FTC-compliant, performance based, debt relief.",
      paraTwo: "At Stonetop Solutions, we always have our customer's best interest at heart and are not afraid to base our fees on performance.  We look forward to working with you to achieve the best result possible.",
      open: false
    },
    {
      title: "What does FTC-compliant, performance based debt relief mean?",
      paraOne: "Prior to October of 2010, most debt settlement companies charged fees before they actually settled any of your debts. The funds designated for creditors were taken out as company fees making it hard to settle debts quickly.",
      paraTwo: "As a result of consumer complaints, the FTC made a change to the Telemarketing Sales Rule (TSR) to make it illegal to charge the consumer a fee until the company settled a debt. This change went into effect at the end of October 2010.",
      open: false
    },
    {
      title: "Benefits of Settlement",
      paraOne: "Pay less than what you owe. After saving money for several weeks or months, our negotiators will communicate and structure a settlement with your creditors so that they agree to accept an amount less than what you owe.",
      paraTwo: "Get relief from harassing phone calls.  While you are our client, we do all the communicating on your behalf. Simply refer your creditors to us and let us take it from there.",
      open: false
    }
  ])

  function toggleCard(selectedIndex) {
    setCards(cards.map((card, index) =>{
      if(index === selectedIndex) {
        card.open = !card.open
      } else {
        card.open = false
      }
      return card
    }))
  };


  const aboutContent = cards.map((content, index) => (
    <div 
      className={"about-contentContainer " + (content.open ? "open" : '')} 
      key={index}
      onClick={() => toggleCard(index)}
      >
        <span className="about-cardTitle">{content.title}</span>
        <div className="about-cardDefault">
          <p>{content.paraOne}</p>
          <p>{content.paraTwo}</p>
        </div>
    </div>
  ))

  

  return(
    <section className="home_about-main" id="about">

        <div className="about-cards"> 
          <h2 className="about-header">ABOUT</h2>
          {aboutContent}
        </div>

        <img className="about-img" src={girlThree} alt="" />
    </section>
  )
}

export default About