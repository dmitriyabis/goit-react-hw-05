import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../api";
import MovieList from "../components/MovieList";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") || "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const newQuery = form.elements.query.value.trim();
    if (!newQuery) return;
    setSearchParams({ query: newQuery });
    const response = await searchMovies(newQuery);
    setMovies(response.data.results);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="query" defaultValue={query} />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movies} />
    </>
  );
};

export default MoviesPage;
