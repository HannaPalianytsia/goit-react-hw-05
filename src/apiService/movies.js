import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {
  api_key: "9a25d664faf1c871afa9932c442121f1",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTI1ZDY2NGZhZjFjODcxYWZhOTkzMmM0NDIxMjFmMSIsInN1YiI6IjY2MWQ3YzNmOTMxZWExMDE0YTY0YzVlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H6dAJVsbP3sQqP2mvPatQme4FUDKz3AfYwDKzGomYJY",
};

export const getMovies = async () => {
  const { data } = await axios.get("trending/movie/day");
  return data.results;
};

export const searchMovies = async (query) => {
  const { data } = await axios.get(`search/movie?query=${query}`);
  return data.results;
};

export const getMovie = async (id) => {
  const { data } = await axios.get(`movie/${id}`);
  return data;
};

export const getCast = async (id) => {
  const { data } = await axios.get(`movie/${id}/credits`);
  return data.cast;
};

export const getReviews = async (id) => {
  const { data } = await axios.get(`movie/${id}/reviews`);
  return data.results;
};
