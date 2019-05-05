import axios from "axios";
import {
  SEARCH_MOVIE_PENDING,
  SEARCH_MOVIE_SUCCESS,
  SEARCH_MOVIE_FAILED,
  GET_SEARCH_INPUT,
  GET_MOVIE_DETAIL,
  GET_RENDER_DETAIL,
  DEFAULT_URL,
  API_KEY,
  CORS_PROXY
} from "./actionType";

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

// export function searchMovie(movie) {
//   const url = `${CORS_PROXY}${DEFAULT_URL}search/movie?api_key=${API_KEY}&querry=${movie}`;
//   const request = axios.get(url);
//   console.log(request);
//   return {
//     type: SEARCH_MOVIE,
//     payload: request
//   };
// }

export const getMovieDetail = text => ({
  type: GET_MOVIE_DETAIL,
  payload: text,
  renderDetail: false
});

export const renderPage = text => ({
  type: GET_RENDER_DETAIL,
  payload: text
});

export const searchInput = text => ({
  type: GET_SEARCH_INPUT,
  payload: text
});

export const searchDetail = text => async dispatch => {
  const urls = [
    //movie search API
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${text}&page=1&include_adult=false`
  ];
  try {
    dispatch({ type: SEARCH_MOVIE_PENDING });
    const data = await Promise.all(
      urls.map(async function(url) {
        const response = await fetch(url);
        return response.json();
      })
    );
    await dispatch({ type: SEARCH_MOVIE_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: SEARCH_MOVIE_FAILED, payload: err });
  }
};
