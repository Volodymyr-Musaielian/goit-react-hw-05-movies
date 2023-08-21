import React, { Suspense, useRef, useEffect, useState } from 'react';
import { HiArrowLeft } from 'react-icons/hi';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import css from './MovieDetails.module.css';
import * as API from '../services/api';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const detailsMovie = await API.fetchMovieDetails(movieId);
        setMovie(detailsMovie);
      } catch (error) {}
    };
    getMovieDetails();
  }, [movieId]);

  if (!movie) {
    return;
  }

  const { title, popularity, overview, genres, poster_path } = movie;

  return (
    <div className={css.detailsContainer}>
      <div className={css.backBtn}>
        <Link to={backLinkLocationRef.current} className={css.link}>
          <HiArrowLeft size="16" />
          Go back
        </Link>
      </div>

      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          width="300"
        />
        <div>
          <h2>{title}</h2>
          <p>User Score: {popularity ? popularity.toFixed(0) : 'N/A'}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <ul>
            {genres &&
              genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
          </ul>
        </div>
      </div>
      <div>
        <p>Additional informaition</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default MovieDetails;
