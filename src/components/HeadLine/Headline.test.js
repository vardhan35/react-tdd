import React from "react";
import Headline from "./";
import { shallow } from "enzyme";
import { findByTestAttributes, checkProps } from "../../../utils";

const setup = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("Headline Component", () => {
  describe("Checking PropTypes", () => {
    test("should not throw an error", () => {
      const expectedProps = {
        header: "Test Header",
        desc: "Test Description",
      };
      const propsErr = checkProps(Headline, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe("have props", () => {
    let component;
    beforeEach(() => {
      const props = {
        header: "HEADER",
        desc: "DESC",
      };
      component = setup(props);
    });
    test("should render headline component without error", () => {
      const headline = findByTestAttributes(component, "headline");
      expect(headline.length).toBe(1);
    });
    test("should render Header", () => {
      const header = findByTestAttributes(component, "header");
      expect(header.length).toBe(1);
    });
    test("should render discription", () => {
      const p = findByTestAttributes(component, "desc");
      expect(p.length).toBe(1);
    });
  });
});
