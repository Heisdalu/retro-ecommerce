import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visitorCart: [],
  visitorSaved: [],
};

const visitorProductSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    updateCart: (state, action) => {
      state.visitorCart = action.payload;
    },
    updateSaved: (state, action) => {
      state.visitorSaved = action.payload;
    },
  },
});

export const { updateCart, updateSaved } = visitorProductSlice.actions;
export default visitorProductSlice.reducer;
