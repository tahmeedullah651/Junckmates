// dashboardSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../axios";

export const fetchReviewsData = createAsyncThunk(
  "fetchReviewsData",
  async (payload) => {
    try {
      const response = await api.get(`/getCollectorReviews/${payload}`, {
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

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviewsData.pending, (state, action) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchReviewsData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchReviewsData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      });
  },
});

export default reviewsSlice.reducer;
