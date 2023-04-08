import React from "react";
import background from "../../assets/stoneBackground.jpg"

function WhatWeDo () {
  return(
    <section className="home_wwd-container">
      <div className="home_wwd-imgContainer">
        <img className="home-wwd-img" src={background} />
        <div className="home_wwd-imgOverlay"></div>
        <span className="home_wwd-title">WHAT WE DO</span>
      </div>
      <div className="home_wwd-text">
        <p>If you are struggling to pay your bills and creditors, you do have several options.  Everyone’s situation is unique and there is no set plan that works for everyone.  Below are a few of the most common options people have when faced with financial uncertainty.</p>
        <p>At Stonetop Financial, we focus on debt settlement - the process of negotiating with your creditors to reduce your debt balances.  Our enrollment specialist will review your individual case and discuss the benefits of our program.  Debt settlement is not for everyone and if our program is not a good fit for you, we will let you know.</p>
        <p>We use Stonetop Holdings for processing and escrowing your program payments.</p>
      </div>
    </section>
  )
}

export default WhatWeDo