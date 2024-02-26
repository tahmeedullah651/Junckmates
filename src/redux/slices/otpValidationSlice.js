// dashboardSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../axios";

export const otp = createAsyncThunk("otp", async (payload) => {
  try {
    console.log("payload", payload);
    // const response = await axios.post(
    //   `v1/users/verifyCode/${payload.userid}`,
    //   payload
    // );
    console.log("otp payload", payload.userid);
    const response = await api.post(`/verifyCode/${payload.userid}`, payload);
    localStorage.setItem("token", response.data.token);
    console.log("Response Otp ===>", response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
});

const initialState = {
  data: null,
  isLoading: false,
  isError: null,
};

const OtpValidation = createSlice({
  name: "otp",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(otp.pending, (state, action) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(otp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(otp.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      });
  },
});

export default OtpValidation.reducer;
