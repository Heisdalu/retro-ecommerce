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
  },
});

export const { success } = AuthSlice.actions;
export default AuthSlice.reducer;
