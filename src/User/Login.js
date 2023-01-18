import { type } from "@testing-library/user-event/dist/type";
import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, updateUser } from "../model/users";

import "./Login.css";

function Login(props) {
  //if user is signing up then props.type is true else for login props.type is false

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate=useNavigate()

  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  function handleSubmit(e) {
    
      e.preventDefault();
      if (props.type) {
        console.log(userList)

        dispatch(
          addUser({
            id: userList[userList.length-1].id + 1,
            email: email,
            password: password,
            LastLogin: Date.now().toString(),
            timestamp: Date.now(),
            noOfLogins: 0,
            name: name,
          })
        );
      } else {
        //e.preventDefault()
        console.log(userList)

        let userLogged = userList.filter((user) => {
          if (user.email === email && user.password === password) {
            console.log("loggedin ");
            dispatch(
              updateUser({
                id: user.id,
                email: user.email,
                password: user.password,
                LastLogin: Date.now().toString(),
                timestamp: Date.now(),
                noOfLogins: user.noOfLogins + 1,
                name: user.name,
              })
            );
            navigate("/posts")
          }
          return user.email == email && user.password == password;
        });

        console.log(userLogged);
      
    }
  }
  // console.log( window.localStorage.getItem("users"));

  return (
    <div className="container">
      <div className="login__container">
        <form onSubmit={handleSubmit}>
          {props.type ? (
            <input
              placeholder="Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            ></input>
          ) : null}
          <input
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          ></input>
          <input
            placeholder="Password"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
