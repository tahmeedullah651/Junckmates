// // dashboardSlice.js

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { api } from "../../axios";

// export const addJunkData = createAsyncThunk("addJunkData", async (payload) => {
//   try {
//     console.log("Junk Add ===>", payload);
//     const response = await api.post("/Category", payload, {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//     });
//     console.log("Response Junk ===>", response.data.data);
//     return response.data.data;
//   } catch (error) {
//     throw error;
//   }
// });

// const initialState = {
//   data: [],
//   isLoading: false,
//   isError: null,
// };

// const addJunkSlice = createSlice({
//   name: "addJunk",
//   initialState,
//   extraReducers: (builder) => {
//     builder
//       .addCase(addJunkData.pending, (state, action) => {
//         state.isLoading = true;
//         state.isError = null;
//       })
//       .addCase(addJunkData.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.data = action.payload;
//       })
//       .addCase(addJunkData.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = action.error.message;
//       });
//   },
// });

// export default addJunkSlice.reducer;
