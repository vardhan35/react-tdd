import moxios from "moxios";
import { testStore } from "./../../utils";
import { fetchposts } from "./../redux/actions";

describe("fetchPosts action", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  test("store is updated correctly", () => {
    const expectedState = [
      { title: "title 1", body: "body 1" },
      { title: "title 2", body: "body 2" },
      { title: "title 3", body: "body 3" },
    ];
    const store = testStore();
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState,
      });
    });
    return store.dispatch(fetchposts()).then(() => {
      const newState = store.getState();
      expect(newState.posts).toBe(expectedState);
    });
  });
});
