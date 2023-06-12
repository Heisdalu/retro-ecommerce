import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  userAuthDetail: {},
};

const AuthSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    success(state, action) {
      state.isAuthenticated = true;
      state.userAuthDetail = action.payload.userCredential;
    },
    // eslint-disable-next-line no-unused-vars
    failed(state, _) {
      state.isAuthenticated = false;
      state.userAuthDetail = {};
    },
  },
});

export const { success } = AuthSlice.actions;
export default AuthSlice.reducer;
