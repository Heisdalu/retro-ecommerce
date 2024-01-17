import { createSlice } from "@reduxjs/toolkit";
import { fetchGuestProduct } from "../../thunk/guestProductThunk";
import { productDetail } from "../../../@types";

interface initialStateTypes {
  data: {
    cart: productDetail[];
    saved: productDetail[];
  };
  error: boolean;
  loading: boolean;
}

const initialState: initialStateTypes = {
  data: {
    cart: [],
    saved: [],
  },
  error: false,
  loading: false,
};

const visitorDetailSlice = createSlice({
  name: "detail",
  initialState: initialState,
  reducers: {
    updateVisitorCart: (state, action) => {
      state.data.cart = action.payload;
    },
    updateSaved: (state, action) => {
      state.data.saved = action.payload;
    },
    updateVisitorData: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builders) => {
    builders
      .addCase(fetchGuestProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGuestProduct.fulfilled, (state, action) => {
        state.data = action.payload;
        state.error = false;
        state.loading = false;
      })
      .addCase(fetchGuestProduct.rejected, (state) => {
        state.error = true;
        state.loading = false;
      });
  },
});

export const { updateVisitorCart, updateSaved, updateVisitorData } =
  visitorDetailSlice.actions;
export default visitorDetailSlice.reducer;
