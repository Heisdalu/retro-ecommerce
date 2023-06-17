import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/AuthSlice/AuthSlice";
import dataReducer from "./reducers/DataSlice/DataSlice";
import visitorDetailReducer from "./reducers/visitorSlice/VisitorDetailSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    visitor: visitorDetailReducer,
    data: dataReducer,
  },
});

export default store;
