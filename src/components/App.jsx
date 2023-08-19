import { Route, Routes } from 'react-router-dom';
import { NotFound } from '../pages/NotFound/NotFound';
import { Layout } from './Layout/Layout';
import { HomePage } from '../pages/HomePage/HomePage';
import { MoviesPage } from '../pages/MoviesPage/MoviesPage';
import { MovieDetails } from '../pages/MovieDetails/MovieDetails';
import { Cast } from '../components/Cast/Cast';
import { Reviews } from '../components/Reviews/Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
