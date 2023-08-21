import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as API from '../../pages/services/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getReviewMovie = async () => {
      try {
        const reviews = await API.fetchMovieReview(movieId);
        setReviews(reviews);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };
    getReviewMovie();
  }, [movieId]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {reviews.length === 0 ? (
            <p>We don't have any reviews for this movie</p>
          ) : (
            reviews.map(({ author, content, id }) => (
              <li key={id}>
                <h2>Author: {author}</h2>
                <p>{content}</p>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};

export default Reviews;
