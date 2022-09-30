import { configureStore } from "@reduxjs/toolkit";
import utilSlice from "./utilsAction";
import ioSlice from "./io";
import user from "./user";

//Global store
export const store = configureStore({
  reducer: {
    utils: utilSlice,
    io: ioSlice,
    user,
  },
});
