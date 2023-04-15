import React from "react";
import '../../styles/contact.css'
import logo from '../../assets/logo.png'
import backgroundImg from '../../assets/squareStones.jpg'

function Contact () {
  return (
    <section className="contact-background">

      <img className="contact-img" src={backgroundImg} />
      <div className="contact-imgOverlay"></div>
      
        <div className="contact-darkerOverlay">
          <div className="contact-info">
            <h2>Contact</h2>
            <h3>Stonetop</h3>
            <h3>Financial Solutions</h3>
            <img className="contact-logo" src={logo} />
          </div>
        </div>

        <div className="contact-addressContainer">
          <ul className="contact-contactList">
            <li>675 West Indiantown Road, Suite 205, Jupiter, FL 33458​</li>
            <li><span>Email:</span>info@Stonetopsolutions.com</li>
            <li><span>Phone:</span>866-555-0435</li>
            <li><span>Hours:</span>Monday - Friday: 9AM-6PM EST</li>
          </ul>

          <div className="contact-formContainer">
            <form className="form-main" action="">
              <div className="form-rightSide">
                <label htmlFor="firstName">First Name *</label>
                <input type="text" id="firstName" name="firstName" placeholder="First Name"/>

                <label htmlFor="lastName">Last Name *</label>
                <input type="text" id="lastName" name="lastName" placeholder="Last Name"/>

                <label htmlFor="subject">Subject *</label>
                <input type="text" id="subject" name="subject" placeholder="Give your message a title"/>
              </div>
              <div className="form-leftSide">
                <label htmlFor="message">Message *</label>
                <textarea name="message" id="message" cols="30" rows="10"></textarea>
              </div>
            </form>
          </div>
        </div>
    </section>
  )
}

export default Contact