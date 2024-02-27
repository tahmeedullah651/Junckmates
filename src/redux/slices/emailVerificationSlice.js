// dashboardSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../axios";
import { errorToast } from "../../Utils/Toast";

export const email = createAsyncThunk("email", async (payload) => {
  try {
    console.log("payload", payload);
    const response = await api.post("/forgotPassword", payload);

    console.log("Response Email ===>", response);
    return response.data;
  } catch (error) {
    errorToast("Invalid email");
    throw error;
  }
});

const initialState = {
  data: null,
  isLoading: false,
  isError: null,
};

const emailVerificationSlice = createSlice({
  name: "email",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(email.pending, (state, action) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(email.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(email.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      });
  },
});

export default emailVerificationSlice.reducer;
