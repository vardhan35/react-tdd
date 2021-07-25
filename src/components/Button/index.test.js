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
    let mockfunc;
    beforeEach(() => {
      mockfunc = jest.fn();
      const Props = {
        buttonText: "Test String",
        emitEvent: mockfunc,
      };
      component = shallow(<SharedButton {...Props} />);
    });
    test("should render button component", () => {
      const button = findByTestAttributes(component, "sharedButton");
      expect(button.length).toBe(1);
    });
    test("should emit callback on click event", () => {
      const button = findByTestAttributes(component, "sharedButton");
      button.simulate("click");
      const callback = mockfunc.mock.calls.length;
      expect(callback).toBe(1);
    });
  });
});
