// dashboardSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../axios";

export const fetchDetailsData = createAsyncThunk(
  "fetchDetailsData",
  async (payload) => {
    try {
      const response = await api.get(`/getUser/${payload}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log("Response Details ===>", response.data.data);
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

const detailSlice = createSlice({
  name: "detail",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchDetailsData.pending, (state, action) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchDetailsData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchDetailsData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      });
  },
});

export default detailSlice.reducer;
