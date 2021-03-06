import React from 'react';
import { navbarLinks } from '../../data';
import { NavLink } from 'react-router-dom';

const Navigation = ({ setPage }) => {
  return navbarLinks.map((item) => {
    const { id, url, text, icon } = item;

    return (
      <NavLink
        key={id}
        className={({ isActive }) =>
          isActive ? 'navbar-item is-active has-text-success' : 'navbar-item'
        }
        to={url}
      >
        <span className="icon">{icon}</span>
        <span>{text}</span>
      </NavLink>
    );
  });
};

export default Navigation;
