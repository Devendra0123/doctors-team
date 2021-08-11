import React,{useEffect} from "react";
import {fetchNews} from "../redux/newsslice";
import {useSelector, useDispatch} from "react-redux";
import axios from "axios";
import "./news.css";
import { Element } from 'react-scroll';

function News() {
  const news = useSelector(state=>state.newsReducer.news);
  
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchNews());
   },[]);
  return  (
   <Element id='bbc_news' name='bbc_news'>
     <div className="news">
     <h2>Top Headines</h2>
     <div className="news_items">
     { news ? news.map(item=>{
      return(
        <div className="news_container">
        <div className="news_section">
          <div className="news_title">
            <h3>{ item.title }</h3>
          </div>
          <div className="news_description">
            <p>{ item.description }</p>
            <button type="button"><a href={`/news/${item.id}`}>&#xbb;</a></button>
          </div>
        </div>
        <div className="news_imageSection">
          <img src={item.image} alt="" />
        </div>
        </div>
      );
    }) : <h2>No news to show</h2>
   }
   </div>
   </div>
  </Element>);
}

export default News;
