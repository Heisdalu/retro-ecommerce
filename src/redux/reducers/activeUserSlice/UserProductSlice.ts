import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchActiveUserProduct } from "../../thunk/activeUserProductThunk";
import { userProductSliceTypes } from "../../../@types/redux/index";
import { initialTypes, productDetail } from "../../../@types";

interface userProductSlicePayloadTypes {
  cart: productDetail[];
  saved: productDetail[];
}

const initial_state: userProductSliceTypes = {
  loading: false,
  data: { cart: [], saved: [] },
  error: false,
  errorMessage: "",
  resolved: false,
};

const userProductSlice = createSlice({
  name: "userProduct",
  initialState: initial_state,
  reducers: {
    updateActiveUserCart: (state, action: PayloadAction<productDetail[]>) => {
      state.data.cart = action.payload;
    },
    updateActiveUserSaved: (state, action: PayloadAction<productDetail[]>) => {
      state.data.saved = action.payload;
    },
    updateActiveData: (
      state,
      action: PayloadAction<userProductSlicePayloadTypes>
    ) => {
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
        state.errorMessage =
          action.error.message || "An unknown error occurred";
      });
  },
});

export const { updateActiveUserCart, updateActiveUserSaved, updateActiveData } =
  userProductSlice.actions;
export default userProductSlice.reducer;
