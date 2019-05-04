import { SEARCH_MOVIE } from "../actions/actionType";

const initialState = {
  movie: [],
  isLoading: false,
  error: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${SEARCH_MOVIE}_REQUEST`:
      return { ...state, isLoading: true };
    case `${SEARCH_MOVIE}_SUCCESS`:
      return { ...state, isLoading: false, movie: action.payload };
    case `${SEARCH_MOVIE}_FAILED`:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
