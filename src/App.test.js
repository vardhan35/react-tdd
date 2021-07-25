import React from "react";
import { shallow } from "enzyme";
import { findByTestAttributes, testStore } from "./../utils";
import App from "./App";

const setup = (initialState = {}) => {
  const store = testStore(initialState);
  const component = shallow(<App store={store} />)
    .childAt(0)
    .dive();
  console.log(component.debug());
  return component;
};

describe("App Component", () => {
  let component;
  beforeEach(() => {
    const initialState = {
      posts: [
        { title: "title 1", body: "body 1" },
        { title: "title 2", body: "body 2" },
        { title: "title 3", body: "body 3" },
      ],
    };
    component = setup(initialState);
  });
  test("should render without error", () => {
    const componet = findByTestAttributes(component, "appComponent");
    expect(componet.length).toBe(1);
  });
  test("should udate state upon calling method_updataState", () => {
    const classInstatnce = component.instance();
    classInstatnce.method_updateState();
    const newState = classInstatnce.state.hideBtn;
    expect(newState).toBe(true);
  });
});
