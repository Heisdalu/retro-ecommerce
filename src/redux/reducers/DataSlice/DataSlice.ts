import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../../thunk/DataThunk";
import { productDetail } from "../../../@types";

interface dataStateTypes {
  mainData: productDetail[];
  loading: boolean;
  error: boolean;
  errorMessage: string;
}

const DataSlice = createSlice({
  name: "data",
  initialState: {
    mainData: [],
    loading: false,
    error: false,
    errorMessage: "",
  } as dataStateTypes,
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
        state.errorMessage = action.error.message || "something went wrong";
      });
  },
});

export const { updateData } = DataSlice.actions;

export default DataSlice.reducer;
