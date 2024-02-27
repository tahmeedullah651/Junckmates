// // dashboardSlice.js

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { api } from "../../axios";

// export const Newpassword = createAsyncThunk("Newpassword", async (payload) => {
//   try {
//     console.log("payload new password", payload);
//     // const response = await axios.post(
//     //   `v1/users/verifyCode/${payload.userid}`,
//     //   payload
//     // );

//     const response = await api.post(`/changePassword`, payload);
//     console.log("token", localStorage.getItem("token"));
//     console.log("Response new password ===>", response.data);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// });

// const initialState = {
//   data: null,
//   isLoading: false,
//   isError: null,
// };

// const newPasswordSlice = createSlice({
//   name: "Newpassword",
//   initialState,
//   extraReducers: (builder) => {
//     builder
//       .addCase(Newpassword.pending, (state, action) => {
//         state.isLoading = true;
//         state.isError = null;
//       })
//       .addCase(Newpassword.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.data = action.payload;
//       })
//       .addCase(Newpassword.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = action.error.message;
//       });
//   },
// });

// export default newPasswordSlice.reducer;
// newPasswordSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../axios";
import { errorToast, successToast } from "../../Utils/Toast";
export const newPassword = createAsyncThunk(
  "newPassword",
  async (payload, thunkAPI) => {
    try {
      console.log("password payload", payload);
      const response = await api.post("/changePassword", payload, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      successToast("Password Updated successfully");
      return response.data;
    } catch (error) {
      errorToast("Error updating password");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const newPasswordSlice = createSlice({
  name: "newPassword",
  initialState: {
    data: null,
    isLoading: false,
    isError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(newPassword.pending, (state, action) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(newPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(newPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

export default newPasswordSlice.reducer;
