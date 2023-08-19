import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from '../Searchbar/Searchbar.module.css';

export const Searchbar = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit(value.trim());
    setValue('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={css.seachbar}>
        <input type="text" value={value} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
