import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/AuthSlice";
import dataRedcuer from "./reducers/DataSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    data: dataRedcuer,
  },
});

export default store;
