import axios from "axios";

import {
  DEFAULT_URL,
  FETCH_MOVIE_DETAILS,
  FETCH_RELATED_MOVIES,
  FETCH_MOVIE_CAST,
  CLEANING_MOVIE_STATE,
  API_KEY
} from "./actionsType";

export const fetchMovie = id => {
  return dispatch => {
    dispatch({
      type: FETCH_MOVIE_DETAILS,
      payload: axios.get(`${DEFAULT_URL}movie/${id}?${API_KEY}`)
    });
  };
};
