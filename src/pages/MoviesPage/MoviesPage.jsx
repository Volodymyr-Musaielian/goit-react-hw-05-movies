import React, { useState, useEffect } from 'react';
import * as API from '../services/api';

import { useSearchParams } from 'react-router-dom';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { MoviesResult } from 'components/MoviesResult/MoviesResult';
// import { Link, useLocation } from 'react-router-dom';

export const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  // const location = useLocation();

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    const getSearchMovies = async () => {
      if (query !== '') {
        try {
          const searchMovies = await API.fetchSearchMovies(query, page);
          setMovies(searchMovies);
        } catch (error) {}
      }
    };
    getSearchMovies();
  }, [query, page]);

  const handleFormSubmit = query => {
    setSearchParams({ query });
    setMovies([]);
    setPage(1);
  };

  return (
    <div>
      <Searchbar onSubmit={handleFormSubmit} />
      {movies.length !== 0 && <MoviesResult movies={movies} />}
    </div>
  );
};

// const updateQueryString = evt => {
//   const movieNameValue = evt.target.value;
//   if (movieNameValue === '') {
//     return setSearchParams({});
//   }
//   setSearchParams({ query: movieNameValue });
// };

// const updateQueryString = query => {
//   const nextParams = query !== '' ? { query } : {};
//   setSearchParams(nextParams);
// };
