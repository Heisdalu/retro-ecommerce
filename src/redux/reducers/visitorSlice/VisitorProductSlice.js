import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visitorProduct: [],
  visitorSaved: [],
};

const visitorProductSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    updateProduct: (state, action) => {
      state.visitorProduct = action.payload;
    },
    updateSaved: (state, action) => {
      state.visitorSaved = action.payload;
    },
  },
});

export const { updateProduct, updateSaved } = visitorProductSlice.actions;
export default visitorProductSlice.reducer;
