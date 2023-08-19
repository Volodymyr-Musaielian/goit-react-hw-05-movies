import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'c86b406e522b33bfd5050d3d09fcff0b';

export const fetchTrendingMovies = async () => {
  const response = await axios.get(
    `trending/all/day?api_key=${API_KEY}&language=en-US`
  );
  return response.data.results;
};

export const fetchSearchMovies = async (query, page) => {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&include_adult=false&query=${query}&language=en-US&page=${page}`
  );
  return response.data.results;
};

export const fetchMovieDetails = async movieId => {
  const response = await axios.get(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const fetchMovieCast = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data.cast;
};

export const fetchMovieReview = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return response.data.results;
};
