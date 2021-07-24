import { combineReducers } from "redux";
import posts from "./posts/reducer";
const RootReducer = combineReducers({
  posts,
});
export default RootReducer;
