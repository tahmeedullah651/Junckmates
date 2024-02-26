import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../axios";
export const currentPassword = createAsyncThunk(
  "currentPassword",
  async (payload, thunkAPI) => {
    try {
      console.log("payload pass", payload);
      const response = await api.patch("/changePassword", payload, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const currentPasswordSlice = createSlice({
  name: "currentPassword",
  initialState: {
    data: null,
    isLoading: false,
    isError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(currentPassword.pending, (state, action) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(currentPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(currentPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

export default currentPasswordSlice.reducer;
