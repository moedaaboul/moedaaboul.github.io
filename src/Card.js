import React, { useState, useEffect } from 'react';
import { skills, portfolio } from './data';

const Portfolio = ({ title, isSquare }) => {
  const [index, setIndex] = useState(0);
  const filter = portfolio.filter((project) => project.name === title);
  const [{ github, images, name, technologies, url }] = filter;
  console.log(github, images, name, technologies, url);
  const skillsData = technologies.map((tech) => {
    return skills.filter((skill) => skill.name === tech);
  });
  console.log(skillsData);
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

  return (
    <>
      <div className={`card ${isSquare && 'square'}`}>
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
    </>
  );
};

export default Portfolio;
