import { createSlice } from "@reduxjs/toolkit";
// import { fetchUserProduct } from "../../thunk/UserProductThunk";
import { fetchActiveUserProduct } from "../../thunk/activeUserProductThunk";

const userProductSlice = createSlice({
  name: "userProduct",
  initialState: {
    loading: false,
    data: { cart: [], saved: [] },
    error: false,
    errorMessage: "",
  },
  reducers: {
    updateActiveUserCart: (state, action) => {
      state.data.cart = action.payload;
    },
    updateActiveUserSaved: (state, action) => {
      state.data.saved = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchActiveUserProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchActiveUserProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchActiveUserProduct.rejected, (state, action) => {
        state.error = true;
        state.loading = false;
        state.errorMessage = action.error.message;
      });
  },
});

export const { updateActiveUserCart, updateActiveUserSaved } =
  userProductSlice.actions;
export default userProductSlice.reducer;
