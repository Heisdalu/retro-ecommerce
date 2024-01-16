import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/AuthSlice/AuthSlice";
import dataReducer from "./reducers/DataSlice/DataSlice";
import visitorDetailReducer from "./reducers/visitorSlice/VisitorDetailSlice";
import UserProductSlice from "./reducers/activeUserSlice/UserProductSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    visitor: visitorDetailReducer,
    data: dataReducer,
    activeUser: UserProductSlice,
  },
});


export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export default store;
                     