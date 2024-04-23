import { NavLink } from "react-router-dom";
import clsx from "clsx";
import styles from "./Navigation.module.css";
import { BiSolidMoviePlay } from "react-icons/bi";

const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(styles.navItem, isActive && styles.active);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <BiSolidMoviePlay size={30} className={styles.navIcon} />
        <ul className={styles.navList}>
          <li>
            <NavLink to="/" className={buildLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={buildLinkClass}>
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
