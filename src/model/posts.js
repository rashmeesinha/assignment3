import { createSlice } from "@reduxjs/toolkit";


const postData = [
  {
    title: "mountain",
    tag: "hills",
    author: "rashmi",
    content:
      "A mountain is landform that rises prominently above its surroundings, generally exhibiting steep slopes, a relatively confined summit area, and considerable local relief.",
    timestamp: "15445885989",
  },
];

export const postSlice = createSlice({
  name: "posts",
  initialState: { value: postData },
  reducers: {
    addPost: (state, action) => {
      state.value.push(action.payload);
      console.log(state.value);
    },
  },
});

export const {addPost} = postSlice.actions;

export default postSlice.reducer;
