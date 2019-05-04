import axios from "axios"
import { SEARCH_MOVIE, DEFAULT_URL, API_KEY, CORS_PROXY } from "./actionType";

// export const searchMovie = movie => dispatch => {
//   dispatch({ type: `${SEARCH_MOVIE}_PENDING}` });
//   fetch(`${CORS_PROXY}${DEFAULT_URL}/search/movie?api_key=${API_KEY}&query=${movie}`)
//     .then(response => response.json())
//     .then(data => dispatch({ type: `${SEARCH_MOVIE}_SUCCESS`, payload: data }))
//     .catch(error => {
//       console.log(error);
//       dispatch({ type: `${SEARCH_MOVIE}_FAILED`, payload: error });
//     });
// };

export function searchMovie(movie) {
  const url = `${CORS_PROXY}${DEFAULT_URL}search/movie?api_key=${API_KEY}&querry=${movie}`;
  const request = axios.get(url);
  console.log(request);
  return {
    type: SEARCH_MOVIE,
    payload: request
  };
}
