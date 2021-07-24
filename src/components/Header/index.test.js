import React from "react";
import { shallow } from "enzyme";
import Header from "./index";

const setup = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};
const findByTestAttributes = (component, attr) => {
  const wrapper = component.find(`[data-test="${attr}"]`);
  return wrapper;
};

describe("Header Component", () => {
  let component;
  beforeEach(() => {
    component = setup();
  });
  test("should render Component without error", () => {
    const header = findByTestAttributes(component, "headerComponent");
    expect(header.length).toBe(1);
  });
  test("should render logo container", () => {
    const logoContainer = findByTestAttributes(component, "logoContainer");
    expect(logoContainer.length).toBe(1);
  });
  test("should render `LOGO` as logo", () => {
    const logo = findByTestAttributes(component, "logo");
    expect(logo.text()).toBe("LOGO");
  });
});
