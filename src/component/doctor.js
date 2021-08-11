import React from "react";
import { useSelector } from "react-redux";

function Doctor() {
  const state = useSelector((state) => state.doctorReducer);
  

  return (
    <div className="doctor">
      {state.map((item,index)=>{
        return(
          <div key={index} className="doctorlist_container">
          <div className="front">
            <div className="image">
              <img src={item.image} alt="" />
              <div>
              <p>{item.education}</p>
              <a href="">View Detail</a>
              </div>
            </div>
            <div className="workplace">
              <h2>{item.workplace}</h2>       
            </div>
          </div>
          <div className="back_info">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        </div>
        )
      })}
   
    </div>
  );
}

export default Doctor;
