// dashboardSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../axios";
export const fetchDashboardData = createAsyncThunk(
  "fetchDashboardData",
  async () => {
    try {
      console.log("Payload Dashboard ===>");

      const response = await api.get("/dashboard", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log("Response Dashboard ===>", response.data);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  data: null,
  isLoading: false,
  isError: null,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboardData.pending, (state, action) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchDashboardData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchDashboardData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      });
  },
});

export default dashboardSlice.reducer;
