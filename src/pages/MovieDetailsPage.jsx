import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { getMovie } from "../apiService/movies";
import Loader from "../components/loader/Loader";
import ErrorMessage from "../components/errorMessage/ErrorMessage";
import MovieDetails from "../components/movieDetails/MovieDetails";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const location = useLocation();

  const goBack = useRef(location?.state ?? "/");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getMovie(movieId);
        setMovie(data);
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
      <div>
        <Link to={goBack.current.pathname}>
          <button>Go back</button>
        </Link>
        {isLoading && <Loader />}
        {error && <ErrorMessage />}
        {movie && <MovieDetails movie={movie} />}
      </div>
      <Outlet movie={movie} />
    </div>
  );
};

export default MovieDetailsPage;
