import React, { useState, useRef, useEffect } from 'react';
import Navigation from '../Navigation';
import './index.css';

const Header = ({ setPage }) => {
  const linksContainerRef = useRef(null);
  const linkElementsRef = useRef(null);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    document.title = 'Muhammad Daaboul - Software Developer';
  }, []);
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
          {/* https://www.stylishnameguru.com/ */}
          <div className="navbar-item is-size-5">𝑀𝓊𝒽𝒶𝓂𝓂𝒶𝒹 𝒟𝒶𝒶𝒷𝑜𝓊𝓁</div>
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
            <Navigation />
          </ul>
        </section>
      </div>
    </nav>
  );
};

export default Header;
