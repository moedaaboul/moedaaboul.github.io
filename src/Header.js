import React, { useState, useRef } from 'react';
import { navbarLinks } from './data';

const Header = ({ setPage }) => {
  const linksContainerRef = useRef(null);
  const linkElementsRef = useRef(null);
  const [height, setHeight] = useState(0);
  const handleClick = (e) => {
    e.preventDefault();
    const containerHeight =
      linksContainerRef.current.getBoundingClientRect().height;
    const elementsHeight =
      linkElementsRef.current.getBoundingClientRect().height;
    if (containerHeight === 0) {
      setHeight(elementsHeight);
    } else {
      setHeight(0);
    }
  };
  return (
    <nav className="navbar is-dark">
      <div className="container">
        <section className="navbar-brand">
          <div className="navbar-burger burger" onClick={handleClick}>
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
          is-light is-flex-desktop is-align-content-center"
          ref={linksContainerRef}
          style={{ height: height }}
        >
          <ul className="navbar-end menu is-dark" ref={linkElementsRef}>
            {navbarLinks.map((item) => {
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
            })}
          </ul>
        </section>
      </div>
    </nav>
  );
};

export default Header;
