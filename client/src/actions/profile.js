import axios from "axios";
import { setAlert } from "./alert";

import {
  GET_PROFILE,
  PROFILE_ERROR,
  ADD_FILE,
  DELETE_FILE,
  DOWNLOAD_FILE
} from "./types";

// Get current users profile
export const getCurrentProfile = () => async dispatch => {
  try {
    const res = await axios.get("/api/profile/me");

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Upload File
export const addFiles = formData => async dispatch => {
  try {
    const res = await axios.post("/api/profile/files", formData);

    dispatch({
      type: ADD_FILE,
      payload: res.data
    });

    dispatch(setAlert("File Added", "success"));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Download File
export const downloadFile = (id, fileName) => async dispatch => {
  try {
    console.log("Download File reached");
    // const res = await axios.get(`/api/profile/files/${id}`);
    const res = await axios({
      url: `/api/profile/files/${id}`,
      method: "GET",
      responseType: "blob"
    });
    console.log("Download File reached" + JSON.stringify(res));
    dispatch({
      type: DOWNLOAD_FILE,
      payload: res.data
    });

    dispatch(setAlert("File Downloaded", "success"));
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete File
export const deleteFile = id => async dispatch => {
  try {
    const res = await axios.delete(`/api/profile/files/${id}`);

    dispatch({
      type: DELETE_FILE,
      payload: res.data
    });

    dispatch(setAlert("File Removed", "success"));
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
