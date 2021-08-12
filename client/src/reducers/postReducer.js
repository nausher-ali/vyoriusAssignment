import {
  ADD_TODO,
  GET_TODOS,
  GET_TODO,
  DELETE_TODO,
  TODO_LOADING
} from '../actions/types';

const initialState = {
  posts: [],
  post: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TODO_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_TODOS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      };
    case GET_TODO:
      return {
        ...state,
        post: action.payload,
        loading: false
      };
    case ADD_TODO:
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      };
    case DELETE_TODO:
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== action.payload)
      };
    default:
      return state;
  }
}
