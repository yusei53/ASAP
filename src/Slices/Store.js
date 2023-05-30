import { configureStore } from "@reduxjs/toolkit";
import { emailSlice } from "./EmailSlice";

export const store = configureStore({
  reducer: {
    todo: emailSlice,
  },
});
