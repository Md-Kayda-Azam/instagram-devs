import { configureStore } from "@reduxjs/toolkit";
import signupSlice from "../features/Signup/signupSlice";
export const store = configureStore({
  reducer: {
    signUp: signupSlice,
  },
});
