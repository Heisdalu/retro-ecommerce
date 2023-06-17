import { createSlice } from "@reduxjs/toolkit";
import { fetchGuestProduct } from "../../thunk/guestProductThunk";

const initialState = {
  visitorId: null,
  visitorProduct: {
    data: {
      cart: [],
      saved: [],
    },
    error: false,
  },
};

const visitorDetailSlice = createSlice({
  name: "detail",
  initialState: initialState,
  reducers: {
    updateVisitorCart: (state, action) => {
      state.visitorProduct.data.cart = action.payload;
    },
    updateSaved: (state, action) => {
      state.visitorProduct.data.saved = action.payload;
    },
    updateID: (state, action) => {
      state.visitorId = action.payload;
    },
  },
  extraReducers: (builders) => {
    builders
      .addCase(fetchGuestProduct.fulfilled, (state, action) => {
        state.visitorProduct.data = action.payload;
        state.visitorProduct.error = false;
      })
      .addCase(fetchGuestProduct.rejected, (state) => {
        state.visitorProduct.error = true;
      });
  },
});

export const { updateVisitorCart, updateSaved, updateID } =
  visitorDetailSlice.actions;
export default visitorDetailSlice.reducer;
