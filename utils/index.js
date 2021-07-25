import { checkPropTypes } from "prop-types";
import { applyMiddleware, createStore } from "redux";
import { middlewares } from "../src/redux/Store";
import RootReducer from "./../src/redux/reducers/index";

export const findByTestAttributes = (component, attr) => {
  const wrapper = component.find(`[data-test="${attr}"]`);
  return wrapper;
};

export const checkProps = (component, expectedProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    expectedProps,
    "props",
    component.name
  );
  return propError;
};

export const testStore = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddleware(RootReducer, initialState);
};
