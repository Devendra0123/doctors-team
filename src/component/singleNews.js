import React,{useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {fetchNews} from "../redux/newsslice";

function SingleNews({match}){
   const { newsId } = match.params

   const news = useSelector(state=>state.newsReducer.news.find(item=>item.id===newsId));
 
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchNews());
   },[]);

  if (!news) {
    return (
      <section>
        <h2>wait for a second please!</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="news">
        <h2>{news.title}</h2>
        <p className="news-content">{news.content}</p>
      </article>
    </section>
  )
}

export default SingleNews; 