// dashboardSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../axios";

export const addJunkData = createAsyncThunk("addJunkData", async (payload) => {
  try {
    const response = await api.post("/Category", payload, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    console.log("Response Junk ===>", response.data.data);
    return response.data.data;
  } catch (error) {
    throw error;
  }
});
export const deleteJunkData = createAsyncThunk(
  "deleteJunkData",
  async (payload) => {
    try {
      console.log("Junk delete ===>", payload);
      const response = await api.delete(`/Category?id=${payload}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return payload;
    } catch (error) {
      throw error;
    }
  }
);
export const fetchJunkData = createAsyncThunk("fetchJunkData", async () => {
  try {
    const response = await api.get("/Category");
    console.log("Response Junk ===>", response.data);
    return response.data.data;
  } catch (error) {
    throw error;
  }
});
export const editJunkData = createAsyncThunk(
  "editJunkData",
  async (payload) => {
    try {
      const response = await api.patch("/Category", payload, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
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

const junkSlice = createSlice({
  name: "junk",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchJunkData.pending, (state, action) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchJunkData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchJunkData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      })
      .addCase(addJunkData.pending, (state, action) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(addJunkData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = [...state.data, action.payload];
      })
      .addCase(addJunkData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      })
      .addCase(deleteJunkData.pending, (state, action) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(deleteJunkData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = state.data.filter((item) => item._id !== action.payload);
      })
      .addCase(deleteJunkData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      })
      .addCase(editJunkData.pending, (state, action) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(editJunkData.fulfilled, (state, action) => {
        state.isLoading = false;

        state.data = state.data.map((item) =>
          item._id === action.payload._id ? { ...action.payload } : item
        );
      })
      .addCase(editJunkData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      });
  },
});

export default junkSlice.reducer;
