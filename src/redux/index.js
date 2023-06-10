import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/AuthSlice";
import dataRedcuer from "./reducers/DataSlice";
import userProductSlice from "./reducers/UserProductSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    data: dataRedcuer,
    userProduct: userProductSlice,
  },
});

export default store;
