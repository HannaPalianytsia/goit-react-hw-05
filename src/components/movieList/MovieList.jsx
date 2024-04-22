import { Link, useLocation } from "react-router-dom";
import movieImage from "../img/movie_image.jpg";
import styles from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={styles.movieList}>
      {movies.map(({ title, id, poster_path }) => (
        <li key={id} className={styles.movieItem}>
          <Link
            to={`/movies/${id}`}
            state={location}
            className={styles.movieItemLink}
          >
            {poster_path !== null ? (
              <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={title}
              />
            ) : (
              <img src={movieImage} alt={title} />
            )}
            <div className={styles.movieTitleContainer}>
              <p className={styles.movieTitle}> {title}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
