import React from "react";
import "./doctorList.css";
import Doctor from "./doctor";
function DoctorList() {
  return (
    <div className="doctorlist">
      <div className="title">
        <h2>Meet our highly qualified doctors</h2>
      </div>
      <div className="doctorlist">
      <Doctor />
      </div>
    </div>
  );
}

export default DoctorList;
