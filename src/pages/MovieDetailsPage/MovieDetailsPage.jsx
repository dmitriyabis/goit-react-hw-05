import { useParams, Outlet, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../api";

function MovieDetailsPage() {
  const { movieId } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const backLink = location.state?.from || "/movies";

  useEffect(() => {
    getMovieDetails(movieId).then(({ data }) => setMovie(data));
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;

  return (
    <>
      <Link to={backLink}>Go back</Link>
      <h2>{movie.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <p>{movie.overview}</p>

      <ul>
        <li>
          <Link to="cast" state={{ from: backLink }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: backLink }}>
            Reviews
          </Link>
        </li>
      </ul>

      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default MovieDetailsPage;
