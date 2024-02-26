import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../axios";

export const addDumpsterData = createAsyncThunk(
  "addDumpsterData",
  async (payload) => {
    try {
      console.log("addDumpster payload==>", payload);
      const response = await api.post("/DumpsterSize", payload, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log("addDumpster Response==>", response.data.data);
      return response.data.data; // Assuming response.data.data contains the updated data
    } catch (error) {
      throw error;
    }
  }
);
export const deleteDumpsterData = createAsyncThunk(
  "deleteDumpsterData",
  async (payload) => {
    try {
      console.log("Junk delete ===>", payload);
      const response = await api.delete(`/DumpsterSize?id=${payload}`, {
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
export const editDumpsterData = createAsyncThunk(
  "editDumpsterData",
  async (payload) => {
    try {
      console.log("edit payload", payload);
      const response = await api.patch("/DumpsterSize", payload, {
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
export const fetchDumpsterData = createAsyncThunk("dumpster", async () => {
  try {
    // console.log("addDumpster==>", payload);
    const response = await api.get("/DumpsterSize");
    console.log("Dumpster Response==>", response.data.data);
    return response.data.data;
  } catch (error) {
    throw error;
  }
});

const initialState = {
  data: [],
  isLoading: false,
  isError: null,
};

const dumpsterSlice = createSlice({
  name: "dumpster",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDumpsterData.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchDumpsterData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchDumpsterData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      })
      .addCase(addDumpsterData.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(addDumpsterData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = [...state.data, action.payload];
      })
      .addCase(addDumpsterData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      })
      .addCase(deleteDumpsterData.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(deleteDumpsterData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = state.data.filter((item) => item._id !== action.payload);
      })
      .addCase(deleteDumpsterData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      })
      .addCase(editDumpsterData.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(editDumpsterData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = state.data.map((item) =>
          item._id === action.payload._id ? { ...action.payload } : item
        );
      })
      .addCase(editDumpsterData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      });
  },
});

export default dumpsterSlice.reducer;
