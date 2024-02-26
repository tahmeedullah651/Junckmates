// dashboardSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../axios";

export const fetchUserData = createAsyncThunk("fetchUserData", async () => {
  try {
    const response = await api.get("/getAllUsers", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    console.log("Response User ===>", response.data);
    return response.data.data;
  } catch (error) {
    throw error;
  }
});
export const changeStatusById = createAsyncThunk(
  "changeStatusById",
  async (payload) => {
    try {
      console.log("status", payload);
      const response = await api.post(
        `/changeUserStatus`,
        {
          userId: payload,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log("Response change status ===>", payload);
      return payload;
    } catch (error) {
      throw error;
    }
  }
);
// export const fetchDetailsData = createAsyncThunk(
//   "fetchDetailsData",
//   async (payload) => {
//     try {
//       const response = await api.get(`/getUser/${payload}`, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });
//       console.log("Response User ===>", response.data);
//       return response.data.data;
//     } catch (error) {
//       throw error;
//     }
//   }
// );
const initialState = {
  data: null,
  isLoading: false,
  isError: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state, action) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      })
      .addCase(changeStatusById.pending, (state, action) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(changeStatusById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = state.data?.map((item) =>
          item._id === action.payload ? { ...item, active: !item.active } : item
        );
        console.log("state.data: ", state.data);
      })
      .addCase(changeStatusById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      });
  },
});

export default userSlice.reducer;
