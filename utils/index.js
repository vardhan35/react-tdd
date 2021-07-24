import { checkPropTypes } from "prop-types";

export const findByTestAttributes = (component, attr) => {
  const wrapper = component.find(`[data-test="${attr}"]`);
  return wrapper;
};

export const checkProps = (component, expectedProps) => {
  const propError = checkPropTypes(
    component.proptype,
    expectedProps,
    "props",
    component.name
  );
  return propError;
};
