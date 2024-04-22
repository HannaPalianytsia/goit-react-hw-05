import styles from "./MovieReviewsDetails.module.css";

const MovieReviewsDetails = ({ reviews }) => {
  return (
    <ul className={styles.reviewsList}>
      {reviews.map(({ id, author, content }) => (
        <li key={id} className={styles.reviewsItem}>
          <p>AUTHOR: {author}</p>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieReviewsDetails;
