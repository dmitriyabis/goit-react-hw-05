import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../../api";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const value = form.elements.query.value.trim();

    if (value) {
      setSearchParams({ query: value });
    }
  };

  useEffect(() => {
    if (!query) return;

    searchMovies(query)
      .then(({ data }) => setMovies(data.results))
      .catch((err) => console.log(err));
  }, [query]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="query" defaultValue={query} />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
