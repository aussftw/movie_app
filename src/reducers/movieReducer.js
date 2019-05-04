import {
  FETCH_MOVIE_DETAILS,
  FETCH_RELATED_MOVIES,
  FETCH_MOVIE_CAST,
  CLEANING_MOVIE_STATE
} from "../actions/actionType";

const initialState = {
  isLoading: false,
  movie: {},
  genres: [],
  relatedMovies: [],
  actors: [],
  error: ""
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case `${FETCH_MOVIE_DETAILS}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${FETCH_MOVIE_DETAILS}_SUCCESS`:
      return {
        ...state,
        isLoading: false,
        movie: action.payload.data,
        genres: action.payload.data.genres
      };
    case `${FETCH_MOVIE_DETAILS}_FAILED`:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
