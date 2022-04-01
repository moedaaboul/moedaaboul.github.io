import React from 'react';
import { navbarLinks } from './data';

const Navigation = ({ setPage }) => {
  return navbarLinks.map((item) => {
    const { id, url, text, icon, page } = item;
    const urlAttribute = url ? { href: url } : {};
    return (
      <a
        key={id}
        className="navbar-item"
        {...urlAttribute}
        onClick={() => setPage(page)}
      >
        <span className="icon">{icon}</span>
        <span>{text}</span>
      </a>
    );
  });
};

export default Navigation;
