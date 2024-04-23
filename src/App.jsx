import { Suspense, lazy } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/loader/Loader";
import MovieCast from "./components/movieCast/MovieCast.jsx";
import MovieReviews from "./components/movieReviews/MovieReviews.jsx";
import Navigation from "./components/navigation/Navigation.jsx";

const HomePage = lazy(() => import("./pages/homePage/HomePage.jsx"));
const MoviesPage = lazy(() => import("./pages/moviesPage/MoviesPage.jsx"));
const MovieDetailsPage = lazy(() =>
  import("./pages/movieDetailsPage/MovieDetailsPage.jsx")
);
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage/NotFoundPage.jsx")
);

function App() {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
