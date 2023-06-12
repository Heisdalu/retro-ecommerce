import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../../thunk/DataThunk";

const visitorDataSlice = createSlice({
  name: "data",
  initialState: {
    visitorData: [],
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
        state.visitorData = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.error = true;
        state.loading = false;
        state.errorMessage = action.error.message;
      });
  },
});

export default visitorDataSlice.reducer;
