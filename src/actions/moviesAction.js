import axios from "axios";
import { FETCH_MOVIES_PENDING, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILED, API_KEY, DEFAULT_URL, CORS_PROXY } from "./actionType";

const urls = [`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`];

export const requestMovies = () => async dispatch => {
  try {
    dispatch({ type: FETCH_MOVIES_PENDING });
    const data = await Promise.all(
      urls.map(async function(url) {
        const response = await fetch(url);
        return response.json;
      })
    );
    await dispatch({ type: FETCH_MOVIES_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: FETCH_MOVIES_FAILED, payload: err });
  }
};
