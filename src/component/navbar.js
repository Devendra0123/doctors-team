import React,{useEffect} from "react";
import "./navbar.css";
import {useSelector,useDispatch} from "react-redux";
import {fetchNews} from "../redux/newsslice";
import Scroll from 'react-scroll'
const ScrollLink = Scroll.ScrollLink;


function Navbar(){
  
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchNews());
   },[]);

  return(
    <div className="navbar">
      <div className="logo">
        <a href="/">DEVEN</a>
      </div> 
  
        <ul className="navbar_items">
        <li>Latest News</li>
          <li> Blog Post </li>
          <li> Medicine </li>
          <li> Sign In </li>
        </ul>
    
    </div>
  )
}

export default Navbar;