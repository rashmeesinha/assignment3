import { createSlice } from "@reduxjs/toolkit";

const userData = [
  {
    id: 1,
    name: "rashmi",
    email: "email",
    password: "1111",
    noOfLogins: 1,
    LastLogin: "",
    timestamp: "15654658484",
  },
  {
    id: 2,
    name: "xyz",
    email: "xyz@gmail.com",
    password: "0000",
    noOfLogins: 1,
    LastLogin: "",
    timestamp: "4484888",
  },
];


export const userSlice = createSlice({
  name: "users",
  initialState: { value: userData },
  reducers: {
    addUser: (state, action) => {
      //write code for adding a user
      state.value.push(action.payload);
      
      //window.localStorage.setItem("isLoggedIn",false)
    },
    updateUser: (state, action) => {
      //let id = action.payload.id;
      state.value = state.value.filter((user) => {
        return user.email !== action.payload.email;
      });
      state.value.push(action.payload);
      
    
      window.localStorage.setItem("isLoggedIn", "true");
      window.sessionStorage.setItem("user", JSON.stringify(action.payload));
      // window.localStorage.setItem("isLoggedIn",true);
    },
    
  },
});

export const { addUser, updateUser} = userSlice.actions;

export default userSlice.reducer;
