import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
};

export const utilSlice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    //Actions
    showModal: (state, action) => {
        state.status = action.payload; 
    }
  },
});

export const { showModal } = utilSlice.actions;

export default utilSlice.reducer;