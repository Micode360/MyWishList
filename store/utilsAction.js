import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: "none",
  selectedOption: null,
};

export const utilSlice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    showModal: (state, action) => {
      state.type = action.payload;
    },
    selectedOption: (state, action) => {
      state.selectedOption = action.payload;
    },
  },
});

export const { showModal, selectedOption } = utilSlice.actions;

export default utilSlice.reducer;
