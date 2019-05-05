import {
  SEARCH_MOVIE_PENDING,
  SEARCH_MOVIE_SUCCESS,
  SEARCH_MOVIE_FAILED,
  GET_SEARCH_INPUT,
  GET_RENDER_DETAIL,
  GET_MOVIE_DETAIL
} from "../actions/actionType";

const initialState = {
  movieS: [],
  movieId: null,
  renderDetail: false,
  renderPage: "mainPage",
  searchInputField: "",
  isLoadingS: false,
  errorS: ""
};

export const getMovieDetail = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_MOVIE_DETAIL:
      return { ...state, movieId: action.payload, renderDetail: true };
    case GET_RENDER_DETAIL:
      return { ...state, renderPage: action.payload, renderDetail: false };
    case SEARCH_MOVIE_PENDING:
      return { ...state, isLoadingS: true };
    case SEARCH_MOVIE_SUCCESS:
      return {
        ...state,
        isLoadingS: false,
        movieS: action.payload,
        renderDetail: false,
        renderPage: "search",
        searchInputField: ""
      };
    case SEARCH_MOVIE_FAILED:
      return { ...state, isLoading: false, errorS: action.payload };
    case GET_SEARCH_INPUT:
      return { ...state, searchInputField: action.payload };
    default:
      return state;
  }
};
