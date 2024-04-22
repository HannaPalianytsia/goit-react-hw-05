import { useEffect, useState } from "react";
import { searchMovies } from "../apiService/movies";
import Loader from "../components/loader/Loader";
import ErrorMessage from "../components/errorMessage/ErrorMessage";
import MovieList from "../components/movieList/MovieList";
import SearchBar from "../components/searchBar/SearchBar";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    if (!query) return;
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await searchMovies(query);
        if (!data.length) {
          setIsEmpty(true);
          return;
        }
        setIsEmpty(false);
        setMovies(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [query]);

  const handleSubmit = (inputValue) => {
    setMovies([]);
    setError(null);
    setIsEmpty(false);
    setSearchParams({ query: inputValue });
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {isEmpty && !isLoading && (
        <p style={{ padding: 40, fontSize: 20 }}>
          Sorry, there are no movies matching your search query. Please try
          again!
        </p>
      )}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;
