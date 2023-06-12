import { createSlice } from "@reduxjs/toolkit";
import { fetchUserProduct } from "../../thunk/UserProductThunk";

const userProductSlice = createSlice({
  name: "userProduct",
  initialState: {
    loading: false,
    data: {},
    error: false,
    errorMessage: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProduct.pending, (state) => {
        state.loading = "true";
      })
      .addCase(fetchUserProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUserProduct.rejected, (state, action) => {
        state.error = true;
        state.loading = false;
        state.errorMessage = action.error.message;
      });
  },
});


export default userProductSlice.reducer;
