import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query.trim() === "") {
      notify();
    } else {
      onSubmit(query);
      setQuery("");
    }
  };

  const notify = () =>
    toast("Sorry, the search bar is empty. Please try again!", {
      duration: 1000,
      style: {
        margin: "60px",
        background: "#f2f2f2",
        color: "#523a64",
      },
    });

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <input
          type="text"
          onChange={handleChange}
          className={styles.searchInput}
          value={query}
        />
        <button type="submit" className={styles.searchBtn}>
          Search
        </button>
      </form>
      <Toaster />
    </>
  );
};

export default SearchBar;
