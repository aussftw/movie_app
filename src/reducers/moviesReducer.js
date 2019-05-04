import { FETCH_MOVIES } from "../actions/actionType";

const initialState = {
  genres: [],
  isLoading: false,
  movies: [],
  page: 1,
  totalPages: 1,
  totalResults: 0,
  genreId: 0,
  error: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH_MOVIES}_PENDING`: {
      return {
        ...state,
        isLoading: true
      };
    }
    case `${FETCH_MOVIES}_SUCCESS`: {
      return {
        ...state,
        isLoading: false,
        movies: action.payload.data.results,
        page: action.payload.data.total_pages,
        totalResults: action.payload.total_results
      };
    }
    case `${FETCH_MOVIES}_FAILED`: {
      return { ...state, isLoading: false, error: action.payload };
    }
    default:
      return state;
  }
};
