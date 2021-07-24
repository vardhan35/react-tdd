import { combineReducers } from "redux";
import { success } from "./SuccessReducer";

const RootReducer = combineReducers({
  success,
});
export default RootReducer;
