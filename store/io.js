import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    addWishResponse: false,
    pending: false,
    message: ""
};

export const ioSlice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    addWish: (state, action) => {
      let {bool, pending , message } = action.payload;
        if(pending === true) {
          state.pending = pending;
          return;
        }
        state.addWishResponse = bool;
        state.pending = pending;
        state.message = message;
    }
  },
});

export const { addWish } = ioSlice.actions;

export default ioSlice.reducer;