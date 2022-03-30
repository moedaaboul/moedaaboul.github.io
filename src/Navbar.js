import React from 'react';
import { navbarLinks } from './data';

const Navbar = () => {
  return (
    <nav className="navbar is-dark">
      <div className="container">
        <section className="navbar-brand">
          <div className="navbar-burger burger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </section>
        <section
          className="
          navbar-menu
          menu-container
          overflow-hidden
          is-light is-flex-desktop is-align-content-center
        "
        >
          <section className="navbar-end menu is-dark">
            {navbarLinks.map((item) => {
              const { id, url, text, icon } = item;
              return (
                <a key={id} className="navbar-item" href={url}>
                  <span className="icon">{icon}</span>
                  <span>{text}</span>
                </a>
              );
            })}
          </section>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
