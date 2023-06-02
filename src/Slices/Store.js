import { configureStore } from "@reduxjs/toolkit";
import EmailSlice from "./EmailSlice";

export const Store = configureStore({
  reducer: {
    todo: EmailSlice,
  },
});
