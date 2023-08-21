import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <nav className={css.nav}>
      <NavLink to="/" className={css.home}>
        Home
      </NavLink>
      <NavLink to="/movies">Movies</NavLink>
    </nav>
  );
};

export default Header;
