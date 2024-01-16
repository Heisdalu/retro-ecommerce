import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../../thunk/DataThunk";

const DataSlice = createSlice({
  name: "data",
  initialState: {
    mainData: [],
    loading: false,
    error: false,
    errorMessage: "",
  },
  reducers: {
    updateData: (state, action) => {
      state.mainData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.mainData = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.error = true;
        state.loading = false;
        state.errorMessage = action.error.message;
      });
  },
});

export const { updateData } = DataSlice.actions;

export default DataSlice.reducer;
