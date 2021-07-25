import React from "react";
import { shallow } from "enzyme";
import { findByTestAttributes, checkProps } from "./../../../utils";
import ListItem from "./";

describe("ListItem Component", () => {
  describe("Checking PropTypes", () => {
    test("should not throw error", () => {
      const expectedProps = {
        title: "Test",
        discription: "Test",
      };
      const propsError = checkProps(ListItem, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });
  describe("Should Render Component", () => {
    let component;
    beforeEach(() => {
      const props = {
        title: "Test String",
        discription: "Test String",
      };
      component = shallow(<ListItem {...props} />);
    });
    test("should render component", () => {
      const listItem = findByTestAttributes(component, "listItem");
      expect(listItem.length).toBe(1);
    });

    test("should render title", () => {
      const listTitle = findByTestAttributes(component, "listTitle");
      expect(listTitle.length).toBe(1);
    });

    test("should Render discription", () => {
      const listDiscription = findByTestAttributes(
        component,
        "listDiscription"
      );
      expect(listDiscription.length).toBe(1);
    });
  });
  describe("should NOT rener component", () => {
    let component;
    beforeEach(() => {
      const props = {
        discription: "Test String",
      };
      component = shallow(<ListItem {...props} />);
    });
    test("should Not render component", () => {
      const listItem = findByTestAttributes(component, "listItem");
      expect(listItem.length).toBe(0);
    });
  });
});
