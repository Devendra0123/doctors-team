import React from "react";
import "./register.css";

function RegisterDoctor(){
     
  return(
      <div className="register">
          <div className="register_container">
              <div className="register_category">
                  <button 
                   id="1"
                   type="button">Register As<br/> Doctor
                   </button>
              </div>
              <div className="register_info_section">
                  <div className="doctor_register_info_section">
                    <h3>As a Doctor</h3> 
                    <input className="name_field" type="text" placeholder="Enter fullname" />
                    <input className="email_field" type="email" placeholder="Enter email" />
                    <input className="password_field" type="password" placeholder="Enter password" />
                    <input className="password_field" type="password" placeholder="Confirm password" />
                    <button class="register_btn">Register</button>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default RegisterDoctor;