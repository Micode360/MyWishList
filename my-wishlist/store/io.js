import { createSlice } from "@reduxjs/toolkit";
//import axios from "axios";

const initialState = {
    addWishResponse: false,
};

export const ioSlice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    //Actions
    addWish: (state, action) => {
        //You will have to use thunk but first add inputs
        console.log(action, "action");
        state.addWishResponse = action.payload; 
    }
  },
});

export const { addWish } = ioSlice.actions;

export default ioSlice.reducer;