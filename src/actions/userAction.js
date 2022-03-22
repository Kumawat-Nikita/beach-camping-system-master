import axios from "axios";
import { GET_ERRORS, GET_USER, DELETE_USER } from "./types";

//To register user
export const addUser = (user, history) => async (dispatch) => {
  try {
    console.log(user);
    await axios.post("/api/register", user);
    // history.push("/api/login");
    window.location.href="/api/login";
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
  }
};

export const getUser = (loginName) => async (dispatch) => {
  const res = await axios.get(`/api/${loginName}`);
  dispatch({
    type: GET_USER,
    payload: res.data,
  });
};

export const updateUser = (user, history) => async (dispatch) => {
  try {
    const res = await axios.patch("/api/update", user);
    // window.location.reload();
    history.push("/update");
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};
export const deleteUser = (loginName) => async (dispatch) => {
  const res = await axios.delete(`/api/${loginName}`);
  dispatch({
    type: DELETE_USER,
    payload: res.data,
  });
};
