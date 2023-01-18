import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPost } from "../model/posts";

import "./Post.css";

function Post() {
  const navigate = useNavigate();

  const postList = useSelector((state) => state.posts.value);

  return (
    <div className="posts">
      {window.localStorage.getItem("isLoggedIn") == "true" && (
        <button style={{position:"absolute",top:"70px",left:"20px"}}
          onClick={() => {
            navigate("/addposts");
          }}
        >
          Add Post
        </button>
      )}
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
      
    </div>
  );
}

export default Post;
