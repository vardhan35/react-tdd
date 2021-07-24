import { applyMiddleware, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import RootReducer from "./reducers";

export const middleware = [ReduxThunk];
export const createStoreWithMiddleware = applyMiddleware(...middleware)(
  createStore
);
export const store = createStoreWithMiddleware(RootReducer);
