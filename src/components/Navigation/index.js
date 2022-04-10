import React from 'react';
import { navbarLinks } from '../../data';
import { Link } from 'react-router-dom';

const Navigation = ({ setPage }) => {
  return navbarLinks.map((item) => {
    const { id, url, text, icon } = item;
    const urlAttribute = url ? { href: url } : {};

    if (id === 2) {
      return (
        <a key={id} className="navbar-item" {...urlAttribute}>
          <span className="icon">{icon}</span>
          <span>{text}</span>
        </a>
      );
    }

    return (
      <Link key={id} className="navbar-item" to={url}>
        <span className="icon">{icon}</span>
        <span>{text}</span>
      </Link>
    );
  });
};

export default Navigation;
