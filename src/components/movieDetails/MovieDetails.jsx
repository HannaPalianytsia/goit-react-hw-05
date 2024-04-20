import { Link } from "react-router-dom";

const MovieDetails = ({
  movie: { poster_path, title, vote_average, overview, genres = [] },
}) => {
  return (
    <div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
        />
        <div>
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
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MovieDetails;
