import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

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
      duration: 4000,
      style: {
        margin: "60px",
        background: "#2d3487",
        color: "#ffffff",
      },
    });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      <Toaster />
    </>
  );
};

export default SearchBar;
