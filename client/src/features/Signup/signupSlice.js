import { createSlice } from "@reduxjs/toolkit";
import { activationByOtp, createPost, loginUser } from "./signupAPI.js";
export const signupSlice = createSlice({
  name: "signup",
  initialState: {
    users: {},
    status: "idle" /* loading | successed | failed */,
    error: null,
    message: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPost.pending, (state, { type, payload }) => {
        state.status = "loading";
      })
      .addCase(createPost.fulfilled, (state, { type, payload }) => {
        state.status = "successed";
        state.users = payload;
        state.message = "Post created successful";
      })
      .addCase(createPost.rejected, (state, { type, payload }) => {
        state.status = "failed";
        state.error = "Post created failed";
      })
      .addCase(activationByOtp.rejected, (state, { type, payload }) => {
        state.status = "successed";
        state.error = "Activation successful";
      })
      .addCase(loginUser.pending, (state, { type, payload }) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, { type, payload }) => {
        state.status = "successed";
        state.users = payload;
        state.error = "Login successful";
      })
      .addCase(loginUser.rejected, (state, { type, payload }) => {
        state.status = "failed";
        state.error = "login failed";
      });
  },
});

// export
export const {} = signupSlice.actions;
export default signupSlice.reducer;
