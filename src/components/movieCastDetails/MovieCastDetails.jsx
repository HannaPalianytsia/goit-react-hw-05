import movieImage from "../img/movie_image.jpg";

const MovieCastDetails = ({ cast }) => {
  return (
    <ul>
      {cast.map(({ id, character, name, profile_path }) => (
        <li key={id}>
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
