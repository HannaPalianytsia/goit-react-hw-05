import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../../apiService/movies";
import Loader from "../loader/Loader";
import ErrorMessage from "../errorMessage/ErrorMessage";
import MovieReviewsDetails from "../movieReviewsDetails/MovieReviewsDetails";

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getReviews(movieId);
        setReviews(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {reviews.length === 0 && <p>We don`t have any reviews for this movie</p>}
      {reviews.length > 0 && <MovieReviewsDetails reviews={reviews} />}
    </div>
  );
};

export default MovieReviews;
