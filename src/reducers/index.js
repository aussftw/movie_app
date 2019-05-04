import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
// import searchFieldReducer from "./searchFiledReducer";
import searchMovieReducer from "./searchMovieReducer";
import moviesReducer from "./moviesReducer";

const reducers = {
  movieDetailsStore: movieReducer,
  moviesStore: moviesReducer,
  searchMovieStore: searchMovieReducer
};

const rootReducer = combineReducers(reducers);
export default rootReducer;
