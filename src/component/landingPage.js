import React from "react";
import "./landingPage.css";

function LandingPage(){
  return (
    <div className="landing_page">
      <div className="landingPage_content">
        <div className="title">
          <h2>A Revolutionary Step<br/> Towards Making Healthy Life...</h2>
        </div>
        <div className="landingPage_description">
           <p>
             Place where our team makes it possible to connect <br/>Highly qualified doctors with patients.
           </p>
        </div>
        <div className="landingPage_register_section">
          <div className="patient_register">
             <p>Register as a patient</p>
             <button type="button">
               <a href="/register_patient">Register Now </a>
               <span>&#x2192;</span>
              </button>
          </div>
          <div className="doctor_register">
             <p>Register as a doctor</p>
             <button type="button">
               <a href="/register_doctor">Register Now </a>
               <span>&#x2192;</span>
              </button>
          </div>
        </div>
        <div className="bottom_line">
         <div></div>
         <div></div>
         <div></div>
      </div>
      <div className="empty"></div>
      </div>  
    </div>
  )
}

export default LandingPage;