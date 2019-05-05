import {
  DEFAULT_URL,
  REQUEST_DETAIL_PENDING,
  REQUEST_DETAIL_SUCCESS,
  REQUEST_DETAIL_FAILED,
  API_KEY,
  CORS_PROXY
} from "./actionsType";

export const requestDetail = text => async dispatch => {
  const urls = [
    `https://api.themoviedb.org/3/movie/${text}?api_key=${API_KEY}&language=en-US`,
    //get recommended API
    `https://api.themoviedb.org/3/movie/${text}/recommendations?api_key=${API_KEY}&language=en-US&page=1`,
    //get cast API
    `https://api.themoviedb.org/3/movie/${text}/credits?api_key=${API_KEY}`,
    //get videos API
    `https://api.themoviedb.org/3/movie/${text}/videos?api_key=${API_KEY}&language=en-US`,
    //get reviews API
    `https://api.themoviedb.org/3/movie/${text}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  ];
  try {
    dispatch({ type: REQUEST_DETAIL_PENDING });
    const data = await Promise.all(
      urls.map(async function(url) {
        const response = await fetch(url);
        return response.json();
      })
    );
    await dispatch({ type: REQUEST_DETAIL_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: REQUEST_DETAIL_FAILED, payload: err });
  }
};
