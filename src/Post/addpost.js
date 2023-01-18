import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPost } from "../model/posts";

import "./Post.css";

function AddPost() {

  const navigate =useNavigate()
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [content, setContent] = useState("");
  

  const dispatch = useDispatch();
  const postList = useSelector((state) => state.posts.value);
 
  

  function handlePost(e) {
    
   e.preventDefault()
    console.log(postList);
   // console.log(JSON.parse(window.sessionStorage.getItem("user")).name)
    dispatch(
      addPost({
        title: title,
        tag: tag,
        author: JSON.parse(window.sessionStorage.getItem("user")).name,
        content: content,
        timestamp: Date(Date.now()).toString(),
      })
      
    );
    console.log(postList);
    
  }

  return (
    <div className="posts">
       <div className="addPosts">
    <form onSubmit={handlePost}> 
      <input
        placeholder="Title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        required
      ></input>

      <input
        placeholder="Tag"
        onChange={(e) => {
          setTag(e.target.value);
        }}
        required
      ></input>
      <input
        placeholder="Content"
        onChange={(e) => {
          setContent(e.target.value);
        }}
        required
      ></input>
      <button >Submit</button></form>
   
  </div>
      
    </div>
   
  );
}

export default AddPost;
