import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCast } from "../../apiService/movies";
import Loader from "../loader/Loader";
import ErrorMessage from "../errorMessage/ErrorMessage";
import MovieCastDetails from "../movieCastDetails/MovieCastDetails";

const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getCast(movieId);
        setCast(data);
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
      {cast.length === 0 && <p>Sorry, there is no inforation about cast</p>}
      {cast.length > 0 && <MovieCastDetails cast={cast} />}
    </div>
  );
};

export default MovieCast;
