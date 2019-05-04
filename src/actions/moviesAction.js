import axios from "axios";
import { FETCH_MOVIES, API_KEY, DEFAULT_URL, CORS_PROXY } from "./actionType";

export function fetchMovies() {
  return dispatch => {
    dispatch({
      type: FETCH_MOVIES,
      payload: axios.get(`${CORS_PROXY}${DEFAULT_URL}/movie/popular/?api_key=${API_KEY}`)
    });
  };
}
