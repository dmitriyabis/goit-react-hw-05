import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../api";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId).then(({ data }) => setReviews(data.results));
  }, [movieId]);

  if (reviews.length === 0) return <p>No reviews available.</p>;

  return (
    <ul>
      {reviews.map((review) => (
        <li key={review.id}>
          <strong>{review.author}:</strong> {review.content}
        </li>
      ))}
    </ul>
  );
};

export default MovieReviews;
