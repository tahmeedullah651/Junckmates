// // dashboardSlice.js

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { api } from "../../axios";

// export const changeStatusById = createAsyncThunk(
//   "changeStatusById",
//   async (payload) => {
//     try {
//       console.log("status", payload);
//       const response = await api.post(
//         `/changeUserStatus`,
//         {
//           userId: payload,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );
//       console.log("Response change status ===>", payload);
//       return payload;
//     } catch (error) {
//       throw error;
//     }
//   }
// );
// const initialState = {
//   data: null,
//   isLoading: false,
//   isError: null,
// };

// const changeStatusSlice = createSlice({
//   name: "status",
//   initialState,
//   extraReducers: (builder) => {
//     builder
//       .addCase(changeStatusById.pending, (state, action) => {
//         state.isLoading = true;
//         state.isError = null;
//       })
//       .addCase(changeStatusById.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.data = state.data?.map((item) =>
//           item._id === action.payload ? { ...item, active: !item.active } : item
//         );
//         console.log("state.data: ", state.data);
//       })
//       .addCase(changeStatusById.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = action.error.message;
//       });
//   },
// });

// export default changeStatusSlice.reducer;
