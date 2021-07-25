import * as actionTypes from "../actionTypes/index";
import axios from "axios";

// export const fetchposts = async (dispatch) => {
//   await axios
//     .get("https://jsonplaceholder.typicode.com/posts")
//     .them((response) => {
//       return dispatch({
//         type: actionTypes.GET_POSTS,
//         payload: response.data,
//       });
//     })
//     .catch((err) => {
//       console.log(err.message);
//     });
// };

export const fetchposts = () => {
  return async (dispatch) => {
    await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const posts = response.data;
        dispatch({
          type: actionTypes.GET_POSTS,
          payload: posts,
        });
      })
      .catch((err) => {});
  };
};
