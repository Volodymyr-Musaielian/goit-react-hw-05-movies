import React, { useEffect, useState } from 'react';
import * as API from '../services/api';
import { Link, useLocation } from 'react-router-dom';
import css from './HomePage.module.css';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getTrending = async () => {
      try {
        const trendingMovies = await API.fetchTrendingMovies();
        setMovies(trendingMovies);
      } catch (error) {}
    };
    getTrending();
  }, []);

  return (
    <>
      <h2 className={css.header}>Trending today</h2>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
