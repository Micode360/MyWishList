import { configureStore } from "@reduxjs/toolkit";
import utilSlice from "./utilsAction";
import ioSlice from "./io";

//Global store
export const store = configureStore({
  reducer: {
    //reducers are defined here
    utils: utilSlice,
    io: ioSlice
  },
});