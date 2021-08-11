import React,{useState} from "react";
import "./blogForm.css";
import {useDispatch} from "react-redux";
import {blogAdded} from "../redux/blogslice";
import { useHistory } from "react-router-dom";

function BlogForm(){
  const [title,setTitle] = useState("");
  const [content,setContent] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  function clickHandeler(e){
    e.preventDefault();
    dispatch(blogAdded({
      id: Date.now(),
      blogTitle: title,
      blogContent: content
    }));
    setTitle("");
    setContent("");
    history.push("/");
  } 
  return (
    <div className="blogForm">
      <div className="blogForm_container">
        <h2>Blogpost Form</h2>
        <div className="blogForm_title">
         <h3>Title</h3>
         <input id="titleInput" type="text" value={title}
          onChange={(e)=>setTitle(e.target.value)}
          />
        </div>
        <div className="blogForm_content">
          <h3>Content</h3>
          <textarea rows="7" id="contentInput" value={content}
            onChange={(e)=>setContent(e.target.value)}
           />
        </div>
        <button onClick={clickHandeler} type="submit">Submit Blog</button>
      </div>
    </div>
  )
}

export default BlogForm;