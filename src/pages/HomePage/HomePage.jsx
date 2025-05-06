import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../api";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(({ data }) => setMovies(data.results));
  }, []);

  return (
    <>
      <h1>Trending Movies</h1>
      <MovieList movies={movies} />
    </>
  );
};

export default HomePage;
