import { useEffect, useState } from "react";
import { getMovies } from "../apiService/movies";
import Loader from "../components/loader/Loader";
import ErrorMessage from "../components/errorMessage/ErrorMessage";
import MovieList from "../components/movieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getMovies();
        setMovies(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h2>Trending movies today</h2>
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
};
export default HomePage;
