import React from "react";
import { useSelector } from "react-redux";
import "./blogpost.css";

function Blogpost() {
  const state = useSelector((state) => state.blogReducer);
  
  return (
    <div className="blogpost">
      <h2>Recent Blogpost</h2>
      { state.map((item,index) => {
    return (
      <div key={index} className="blogpost_container">
        <div className="blogpost_title">
          <h3>{item.title}</h3>
        </div>
        <div className="blogpost_content">
          <p>{item.content}</p>
        </div>
      </div>
    );
  }) 
   }     
      
    </div>
  );
}

export default Blogpost;
