import postReducer from "./reducer";
import * as actionTypes from "../../actionTypes";

describe("posts reducer", () => {
  test("should return default state", () => {
    const postState = postReducer(undefined, {});
    expect(postState).toEqual([]);
  });
  test("should return state on passing action type", () => {
    const posts = [
      { title: "titile 1" },
      { title: "titile 2" },
      { title: "titile 3" },
    ];
    const postState = postReducer(posts, {
      type: actionTypes.GET_POSTS,
      payload: posts,
    });
    expect(postState).toBe(posts);
  });
});
