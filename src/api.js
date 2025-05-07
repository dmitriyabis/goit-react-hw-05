import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization:
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YmUyYzdhOTVkNjRiMDE2NmRhYzEzOGQ4ZGRiOTdjNyIsIm5iZiI6MTc0NjUxOTA2OS40OTcsInN1YiI6IjY4MTljNDFkYWUzZmQ0ZWRhZjg0ZDc3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cjyfHaO2KW0eWDyjWghQkwcXJkRWl65rU44ZPOvpFQE",
  },
};

export const fetchTrendingMovies = () =>
  axios.get(`${BASE_URL}/trending/movie/day`, options);

export const searchMovies = (query) =>
  axios.get(
    `${BASE_URL}/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  );

export const getMovieDetails = (movieId) =>
  axios.get(`${BASE_URL}/movie/${movieId}`, options);

export const getMovieCast = (movieId) =>
  axios.get(`${BASE_URL}/movie/${movieId}/credits`, options);

export const getMovieReviews = (movieId) =>
  axios.get(`${BASE_URL}/movie/${movieId}/reviews`, options);
