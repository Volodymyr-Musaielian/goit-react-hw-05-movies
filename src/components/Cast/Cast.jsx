import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as API from '../../pages/services/api';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const getActorMovie = async () => {
      try {
        const actors = await API.fetchMovieCast(movieId);
        setActors(actors);
      } catch (error) {}
    };
    getActorMovie();
  }, [movieId]);

  return (
    <div>
      <ul>
        {actors.map(({ id, profile_path, name, character }) => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${profile_path}`}
              alt={name}
              width="200"
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

Cast.propTypes = {
  actors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      profile_path: PropTypes.string,
      character: PropTypes.number.isRequired,
    })
  ),
};

export default Cast;
