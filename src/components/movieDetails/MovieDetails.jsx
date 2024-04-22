import { Link } from "react-router-dom";
import movieImage from "../img/movie_image.jpg";
import styles from "./MovieDetails.module.css";

const MovieDetails = ({
  movie: { poster_path, title, vote_average, overview, genres = [] },
}) => {
  return (
    <div>
      <div className={styles.movie}>
        {poster_path !== null ? (
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
          />
        ) : (
          <img src={movieImage} alt={title} />
        )}
        <div className={styles.movieInfo}>
          <h2>{title}</h2>
          <p>{`User Score ${Math.round(vote_average * 10)}%`}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <ul>
            {genres.map(({ name, id }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.addInfo}>
        <h3 className={styles.addInfoTitle}>Additional information</h3>
        <ul>
          <li className={styles.addInfoItem}>
            <Link to="cast">Cast</Link>
          </li>
          <li className={styles.addInfoItem}>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MovieDetails;
