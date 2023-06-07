import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../thunk/DataThunk";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    loading: false,
    error: false,
    errorMessage: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.error = true;
        state.loading = false;
        state.errorMessage = action.error.message;
      });
  },
});

export default dataSlice.reducer;
