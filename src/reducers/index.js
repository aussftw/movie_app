import { combineReducers } from "redux";
import { getMovieDetail } from "./searchMovieReducer";
import { requestMovies } from "./moviesReducer";
import { requestDetail } from "./detailsReducer";

const rootReducer = combineReducers({ requestMovies, getMovieDetail, requestDetail });
export default rootReducer;
