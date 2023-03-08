import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: "none",
  selectedOption: null,
  colors: ["red", "blue", "green"],
  categorySearchValue: "",
  wishSearchValue: ""
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
    searchCategory: (state, action) => {
      state.categorySearchValue = action.payload;
    },
    searchWish: (state, action) => {
      state.wishSearchValue = action.payload;
    }
  },
});

export const { showModal, selectedOption, searchCategory, searchWish } = utilSlice.actions;

export default utilSlice.reducer;
