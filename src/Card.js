import React, { useState, useEffect, useRef } from 'react';
import { skills, portfolio } from './data';

const Portfolio = ({ title, isSquare }) => {
  const [index, setIndex] = useState(0);
  const [isAnimation, setIsAnimation] = useState(false);
  const squareWrapperRef = useRef(null);

  const filter = portfolio.filter((project) => project.name === title);
  const [{ name, technologies }] = filter;
  const skillsData = technologies.map((tech) => {
    return skills.filter((skill) => skill.name === tech);
  });
  const titleIndex = portfolio.findIndex((x) => x.name === title);
  const increaseIndex = () =>
    index === portfolio[titleIndex].images.length - 1
      ? setIndex(0)
      : setIndex(index + 1);

  const styles = {
    hidden: {
      display: 'none',
    },
    show: {
      display: 'block',
    },
  };

  const findStyle = (i) => {
    if (index === i) {
      return styles.show;
    } else {
      return styles.hidden;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      increaseIndex();
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  const scrollCallback = (entries) => {
    if (entries[0].isIntersecting && isSquare) {
      setIsAnimation(true);
    } else {
      setIsAnimation(false);
    }
  };

  useEffect(() => {
    // *** Grab the element related to this callback
    const { current } = squareWrapperRef;
    const observer = new IntersectionObserver(scrollCallback);
    observer.observe(current);
    return () => {
      observer.disconnect(current); // *** Use the same element
    };
  }, []);

  return (
    <>
      <div class="square-wrapper" ref={squareWrapperRef}>
        <div
          className={`card ${isSquare && 'square'} ${
            isAnimation && 'square-animation'
          }`}
        >
          <header className="card-header">
            <h3 className="card-header-title">{name}</h3>
            <div className="is-flex is-align-items-center">
              {skillsData.map((e, i) => {
                const [{ classDesc, src, name }] = e;
                return (
                  <figure key={i} className="image is-24x24 mr-1">
                    <img
                      className={classDesc}
                      src={src}
                      title={`${name} icon`}
                      alt={name}
                    ></img>
                  </figure>
                );
              })}
            </div>
          </header>
          <div className="card-content">
            <div className="slideshow-container">
              {portfolio[titleIndex].images.map((e, i) => {
                return (
                  <div className="mySlides fade" style={findStyle(i)}>
                    <figure
                      className={`image ${isSquare ? `is-3by2` : `is-6by3`}`}
                    >
                      <img src={e} alt="" />
                    </figure>
                  </div>
                );
              })}
              <footer className="card-footer">
                <p className="card-footer-item">
                  <span>
                    <a href={portfolio[titleIndex].url}>Preview</a>
                  </span>
                </p>
                <p className="card-footer-item">
                  <span>
                    View on
                    <a
                      href={portfolio[titleIndex].github}
                      className="is-link ml-1"
                    >
                      Github
                    </a>
                  </span>
                </p>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
