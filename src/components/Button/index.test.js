import React from "react";
import { shallow } from "enzyme";
import { findByTestAttributes, checkProps } from "./../../../utils";
import SharedButton from "./";

describe("SharedButton Component", () => {
  describe("Checking PropTypes", () => {
    test("should Not throw warning", () => {
      const expectedProps = {
        buttonText: "Test String",
        emitEvent: () => {},
      };
      const propsError = checkProps(SharedButton, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });
  describe("Renders", () => {
    let component;
    beforeEach(() => {
      const Props = {
        buttonText: "Test String",
        emitEvent: () => {},
      };
      component = shallow(<SharedButton {...Props} />);
    });
    test("should render button component", () => {
      const button = findByTestAttributes(component, "sharedButton");
      expect(button.length).toBe(1);
    });
  });
});
