import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state, action) => {
      let user = action.payload;
      state.user = user;
    },
  },
});

export const { getUser } = user.actions;

export default user.reducer;
