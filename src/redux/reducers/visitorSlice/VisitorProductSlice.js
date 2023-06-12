import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visitorProduct: [],
};

const visitorProductSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    updateProduct: (state, action) => {
      state.visitorProduct = action.payload;
    },
  },
});

export const { updateProduct, addToCart } = visitorProductSlice.actions;
export default visitorProductSlice.reducer;
