import { ADD_POST, DELETE_POST, EDIT_POST  } from "../action/post";

export const addPost = (payload) => {
  return {
    type: ADD_POST,
    payload
  }
}

export const deletePost = (payload) => {
  return {
    type: DELETE_POST,
    payload
  }
}

export const editPost = (payload) => {
  return {
    type: EDIT_POST,
    payload
  }
}