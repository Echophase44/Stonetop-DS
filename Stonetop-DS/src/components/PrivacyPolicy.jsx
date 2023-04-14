import React from "react";
import Navbar from "./Navbar";
import Footer from "./section_components/Footer.jsx"
import '../styles/privacypolicy.css'

function PrivacyPolicy() {
  return(
    <div className="policy-page">
      <Navbar />

      <div className="policy-questionCard policy-padding">
        <h1>Privacy Statement</h1>
        <span>Effective Date: October 2015</span>
        <p>Your financial privacy is very important to us. This notice discusses Stonetop Financial Solution's privacy practices with respect to guarding the confidentiality and security of your personal information and the information you submit through this website.</p>
        <p>If we decide to change our privacy policy, we will post those changes to this privacy statement, the homepage, and other places we deem appropriate so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we disclose it. We reserve the right to modify this privacy statement at any time, so please review it frequently. If we make material changes to this policy, we will notify you here, by Email, or by means of a notice on our homepage.</p>
      </div>

      <div className="policy-questionCard">
        <h2>What information does Stonetop Financial collect through its website?</h2>
        <p>We may collect personal information about you that you willingly provide to us for purposes of generating a free debt analysis. This information may include your name, address, Email address, state of residence, and phone number. Stonetop Financial wishes to convey to its users that the only type of communications that are sent out are service related emails that are in response to a user’s online inquiry requesting a free consultation and users cannot opt out from receiving these service related emails. If your personally identifiable information changes, or if you no longer desire our service, you may contact us at the contact information provided at the end of this form to correct, update, delete or deactivate your personal information.</p>
        <p>We reserve the right to disclose your personally identifiable information as required by law or when we believe that disclosure is necessary to protect our rights and/or comply with a judicial proceeding, court order, or legal process served on our Web site.</p>
        <p>We also may collect non-identifiable information. Our website automatically collects information about your visit. This can include the address of the website from which you originated before visiting our website, the pages you visit on our website, and the browser you use.</p>
        <p>If you enroll in the program, we will collect additional personal information about you, including information about your debts, creditors, and financial condition. We cannot collect this information during your visit to our website; we will only do so when you enroll in our debt reduction program after consultation with a Stonetop Financial representative.</p>
      </div>

      <div className="policy-questionCard">
        <h2>How does Stonetop Financial use the information it collects?</h2>
        <p>Stonetop Financial does not share any information that it collects through its website with any other person or entity for any reason. The personal information we collect is used solely to develop your free online analysis. After developing an analysis, we will use the information you submitted to contact you with the results of the analysis and explain how Stonetop Financial can help relieve your debt burden.</p>
        <p>We do not share any personal information about current or former clients, or anyone who has received counseling or who has inquired about a debt settlement program except as permitted by law. We may share personal information about you only to service and maintain your account with us. Thus, we may share personal information about you with your creditors and with other parties that help us to service and maintain your account. We may receive personal information about you from other parties such as your creditors and we do not share that information except to service or maintain your account.</p>
        <p>As necessary, we may share non-personal information with our trusted third party service providers, such as the corporations that manage or host our website, to perform services on our behalf. They typically use non-personal, anonymous information – like information regarding visit duration – that isn’t identifiable with a particular visitor to further improve the website.</p>
      </div>

      <div className="policy-questionCard">
        <h2>Cookies</h2>
        <p>A cookie is a small text file that is stored on a user’s computer for record-keeping purposes. We use cookies on this site. We do not link the information we store in cookies to any personally identifiable information you submit while on our site.</p>
      </div>

      <div className="policy-questionCard">
        <h2>Does Stonetop Financial have safeguards in place to protect my personal information?</h2>
        <p>We restrict access to your personal information only to those employees who need to know that information to service and maintain your account with us. We also maintain physical, electronic and procedural safeguards to guard your personal information.</p>
      </div>

      <div className="policy-questionCard policy-paddingBottom">
        <h2>Contact Us</h2>
        <p>If you have any questions or concerns about this privacy statement, please send them to us by emailing info@Stonetopfinancialsolutions.com</p>
      </div>

      <Footer />
    </div>
  )
}

export default PrivacyPolicy