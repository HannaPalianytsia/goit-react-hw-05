import movieImage from "../img/movie_image.jpg";
import styles from "./MovieCastDetails.module.css";

const MovieCastDetails = ({ cast }) => {
  return (
    <ul className={styles.castList}>
      {cast.map(({ id, character, name, profile_path }) => (
        <li key={id} className={styles.castItem}>
          {profile_path !== null ? (
            <img
              src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
              alt={name}
            />
          ) : (
            <img src={movieImage} alt={name} />
          )}

          <p>{name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieCastDetails;
