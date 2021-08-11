import React from "react";
import { useSelector } from "react-redux";

function Medicine() {
  const state = useSelector((state) => state.medicineReducer);
  return (
    <div className="medicine">
      {state.map((item,index) => {
        return (
          <div key={index} className="medicine_container">
            <div className="medicine_description">
              <h3>{item.name}</h3>
              <p>{item.uses}</p>
              <button type="button">View Detail</button>
            </div>
            <div className="medicine_image">
              <img src={item.image} alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Medicine;
