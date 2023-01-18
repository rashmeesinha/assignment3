import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Navbar.css";

function Navbar(props) {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      {window.localStorage.getItem("isLoggedIn") == "false" ? (
        <div>
          <div
            className="nav__item"
            onClick={() => {
              navigate("/signUp");
            }}
          >
            Sign up
          </div>
          <div
            className="nav__item"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </div>
        </div>
      ) : (
        <div
          className="nav__item"
          onClick={() => {
            window.localStorage.setItem("isLoggedIn", false);
            // props.handleLogin()
            window.sessionStorage.clear();

            navigate("/");
          }}
        >
          Log Out
        </div>
      )}

      <div
        className="nav__item"
        onClick={() => {
          navigate("/posts");
        }}
      >
        Post
      </div>
    </div>
  );
}

export default Navbar;
