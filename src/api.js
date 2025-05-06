import axios from "axios";

const BASE_URL =
  "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1https://api.themoviedb.org/3";
const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZmJmM2FmMmRhNWU2Njg1ODk0ZmIzOTYyNTJjOWFlOCIsIm5iZiI6MTc0NjUxOTA2OS40OTcsInN1YiI6IjY4MTljNDFkYWUzZmQ0ZWRhZjg0ZDc3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qMpjhIvHXBAifhpkGAlKIetSncfGZ0JJ35YtXPoNNhk"; // change

  const options = {
    headers: {
      Authorization: TOKEN,
    },
  };
  
  export const fetchTrendingMovies = () =>
    axios.get(`${BASE_URL}/trending/movie/day`, options);
  
  export const searchMovies = (query) =>
    axios.get(`${BASE_URL}/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, options);
  
  export const getMovieDetails = (movieId) =>
    axios.get(`${BASE_URL}/movie/${movieId}`, options);
  
  export const getMovieCast = (movieId) =>
    axios.get(`${BASE_URL}/movie/${movieId}/credits`, options);
  
  export const getMovieReviews = (movieId) =>
    axios.get(`${BASE_URL}/movie/${movieId}/reviews`, options);