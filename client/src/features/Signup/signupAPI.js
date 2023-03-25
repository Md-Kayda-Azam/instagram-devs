import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import swal from "sweetalert";
import createToast from "../../utility/toast";

// create async post
export const createPost = createAsyncThunk(
  "signup/createPost",
  async (data) => {
    const response = await axios
      .post("/api/v1/user/register", data)
      .then((res) => {
        createToast("User registation successful", "success");
      })
      .catch((error) => {
        createToast(error.response.data.message, "error");
      });
    return response.data;
  }
);
// create async post
export const activationByOtp = createAsyncThunk(
  "activation/createPost",
  async (data) => {
    const response = await axios
      .post("/api/v1/user/code-activate", data)
      .then((res) => {
        swal({
          title: "Please field in the gap!",
          text: "You clicked the button!",
          icon: "error",
        });
        Cookies.remove("otp");
      })
      .catch((error) => {
        swal(error.response.data.message);
      });
    return response.data;
  }
);
// create async post
export const loginUser = createAsyncThunk(
  "loginUser/createPost",
  async (data) => {
    const response = await axios.post("/api/v1/user/code-activate", data);
    return response.data;
  }
);
