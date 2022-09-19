import { createSlice } from "@reduxjs/toolkit";
//import axios from "axios";

const initialState = {
    addWishResponse: false,
};

export const ioSlice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    addWish: (state, action) => {
        state.addWishResponse = action.payload; 
    }
  },
});

export const { showModal } = ioSlice.actions;

export default ioSlice.reducer;