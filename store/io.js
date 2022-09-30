import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addWish: {
    status: "ready",
    pending: false,
    message: "",
  },
  deleteWish: {
    status: "none",
    pending: false,
    message: "",
    list: {},
  },
};

export const ioSlice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    addWish: (state, action) => {
      let { status, pending, message } = action.payload;
      if (pending === true) {
        state.addWish.pending = pending;
        return;
      }
      state.addWish.status = status;
      state.addWish.pending = pending;
      state.addWish.message = message;
    },
    deleteWish: (state, action) => {
      let { status, pending, message, list } = action.payload;
      if (pending === true) {
        state.deleteWish.pending = pending;
        return;
      }
      state.deleteWish.status = status;
      state.deleteWish.pending = pending;
      state.deleteWish.message = message;
      state.deleteWish.list = list;
    },
  },
});

export const { addWish, deleteWish } = ioSlice.actions;

export default ioSlice.reducer;
