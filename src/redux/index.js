import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/AuthSlice/AuthSlice";
import visitorReducer from "./reducers/visitorSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    visitor: visitorReducer,
  },
});

export default store;
