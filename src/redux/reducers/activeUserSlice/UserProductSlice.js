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
    resolved: false,
  },
  reducers: {
    updateActiveUserCart: (state, action) => {
      state.data.cart = action.payload;
    },
    updateActiveUserSaved: (state, action) => {
      state.data.saved = action.payload;
    },
    updateActiveData: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchActiveUserProduct.pending, (state) => {
        state.loading = true;
        state.resolved = false;
        state.error = false;
        state.errorMessage = "";
      })
      .addCase(fetchActiveUserProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.resolved = true;
      })
      .addCase(fetchActiveUserProduct.rejected, (state, action) => {
        state.resolved = false;
        state.error = true;
        state.loading = false;
        state.errorMessage = action.error.message;
      });
  },
});

export const { updateActiveUserCart, updateActiveUserSaved, updateActiveData } =
  userProductSlice.actions;
export default userProductSlice.reducer;
