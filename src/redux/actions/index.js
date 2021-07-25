import * as actionTypes from "../actionTypes/index";
import axios from "axios";

export const fetchposts = async (dispatch) => {
  await axios
    .get("")
    .them((response) => {
      dispatch({
        type: actionTypes.GET_POSTS,
        payload: response.data,
      });
    })
    .catch((err) => {
      console.log(err.message);
    });
};
