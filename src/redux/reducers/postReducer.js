import { ADD_POST, DELETE_POST, EDIT_POST } from "../action/post";

const initalState = {
  posts: []
}

export const postReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {...state, posts: [...state.posts, action.payload]}
    case DELETE_POST:
      return {...state, posts: state.posts.filter(el => el.id !== action.payload.id)}  
    case EDIT_POST:
      return {...state, posts: state.posts.map(el => {
        if (el.id === action.payload.id) {
          return el = {...el, title: action.payload.title, content: action.payload.content} 
        }
        return el;
      })}
    default:
      return state;
  }
}