import { FETCH_MOVIES_PENDING, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILED } from "../actions/actionType";

const initialStateMovies = {
  isLoading: false,
  movies: [],
  error: ""
};

export const requestMovies = (state = initialStateMovies, action = {}) => {
  switch (action.type) {
    case FETCH_MOVIES_PENDING: {
      return {
        ...state,
        isLoading: true
      };
    }
    case FETCH_MOVIES_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        movies: action.payload
      };
    }
    case FETCH_MOVIES_FAILED: {
      return { ...state, isLoading: false, error: action.payload };
    }
    default:
      return state;
  }
};
