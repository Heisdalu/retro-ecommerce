import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userCredentialTypes } from "../../../@types";

interface authStateTypes {
  isAuthenticated: boolean;
  userAuthDetail: userCredentialTypes | {};
}

const initialState: authStateTypes = {
  isAuthenticated: false,
  userAuthDetail: {},
};

const AuthSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    success(
      state,
      action: PayloadAction<{ userCredential: userCredentialTypes }>
    ) {
      state.isAuthenticated = true;
      state.userAuthDetail = action.payload.userCredential;
    },
    reset(state) {
      state.isAuthenticated = false;
      state.userAuthDetail = {};
    },
  },
});

export const { success, reset } = AuthSlice.actions;
export default AuthSlice.reducer;
