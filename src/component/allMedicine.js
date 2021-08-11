import React from "react";
import Medicine from "./medicine";
import "./medicine.css";

function AllMedicine() {
  return (
    <div className="allMedicine">
      <h2>Some Important Medicine</h2>
      <div className="allMedicine_container">
        <Medicine />
        <Medicine />
      </div>
    </div>
  );
}

export default AllMedicine;
