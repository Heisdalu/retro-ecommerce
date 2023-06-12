import { combineReducers } from "redux";
import VisitorDataSlice from "./VisitorDataSlice";
import VisitorProductSlice from "./VisitorProductSlice";

const visitorReducer = combineReducers({
  data: VisitorDataSlice,
  product: VisitorProductSlice,
});

export default visitorReducer;
