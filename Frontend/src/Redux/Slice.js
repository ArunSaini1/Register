import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllData = createAsyncThunk("gitUsers", async () => {
  const response = await fetch("http://localhost:5000/api/user");
  try {
    const result = response.json();
    return result;
  } catch (error) {
    return "Error";
  }
});


export const gitUser = createSlice({
  name: "User",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [getAllData.pending]: (state) => {
      state.loading = true;
    },
    [getAllData.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [getAllData.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default gitUser.reducer;
