import { NavLink } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

//можна зробити setInterval (setTimeout) і перенаправити на home page
const NotFoundPage = () => {
  return (
    <div className={styles.notFoundPage}>
      <p className={styles.notFound}>This page not found</p>
      <NavLink to="/" className={styles.goHome}>
        Go to home page
      </NavLink>
    </div>
  );
};

export default NotFoundPage;
