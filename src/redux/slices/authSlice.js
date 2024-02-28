import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../axios";
import { errorToast, successToast } from "../../Utils/Toast";

// Define createAsyncThunk outside the slice
export const login = createAsyncThunk("/login", async (payload) => {
  try {
    const response = await api.post("/login", payload);
    localStorage.setItem("token", response.data.token);
    console.log("login data ===>", response.data);
    return response.data; // Assuming your response contains the user data
  } catch (error) {
    errorToast("Invalid Email or Password");
    console.log("Invalid Email or Password", error);
    throw error;
    // Rethrow the error to be caught by the rejection handler
  }
});

const initialState = {
  currentUser: null,
  isError: null,
  isLoading: false,
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.currentUser = action.payload; // Assuming response data is the user object
        state.isAuth = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isError = action.error.message; // Access the error message from action.error
        state.isLoading = false;
      });
  },
});

export default authSlice.reducer;
