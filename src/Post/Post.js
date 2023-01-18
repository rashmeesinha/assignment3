import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPost } from "../model/posts";

import "./Post.css";

function Post() {

  const navigate =useNavigate()
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [time, setTime] = useState("");

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
        timestamp: Date.now().toString(),
      })
      
    );
    console.log(postList);
    
  }

  return (
    <div className="posts">
      {postList.map((item) => {
        return (
          <div className="post">
            <h3>Title: {item.title}</h3>
            <h3>Tag: {item.tag}</h3>
            <h3>Content: {item.content}</h3>
            <h3>Author: {item.author}</h3>
            <h3>Time Posted: {item.timestamp}</h3>
          </div>
        );
      })}
      {window.localStorage.getItem("isLoggedIn")=="true"&& <div className="addPosts">
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
       
      </div>}
      
    </div>
  );
}

export default Post;
