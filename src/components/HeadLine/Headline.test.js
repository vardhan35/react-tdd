import React from "react";
import Headline from "./";
import { shallow } from "enzyme";
import { findByTestAttributes } from "../../../utils";

const setup = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("Headline Component", () => {
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
