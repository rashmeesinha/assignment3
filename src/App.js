import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "./model/users";
import postsReducer from "./model/posts"



import "./App.css";

import Navbar from "./Navbar/Navbar"

import Post from "./Post/Post";
import Login from "./User/Login";

const store = configureStore({
  reducer: {
    users: userReducer,
    posts: postsReducer,
    
  },
});

function App() {
  
  return (
    <div className="App">
      <Provider store={store}>
     <Navbar />

      <Routes>
        <Route index path="/login" element={<Login type={false}/>}></Route>
        <Route exact path="/signUp" element={<Login type={true}/>}></Route>
        
        <Route exact path="/posts" element={<Post/>}></Route>
      </Routes>
      </Provider>
    </div>
  );
}

export default App;
