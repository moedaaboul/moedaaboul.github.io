import React, { useState, useEffect, useRef } from 'react';
import { skills, portfolio } from '../../data';
import { useGlobalContext } from '../../providers/GlobalStateProvider';
import './index.css';

const Project = ({ title, isSquare }) => {
  const { openModal, setRepoData, setRepoImages, setProjectUrl, setGithubUrl } =
    useGlobalContext();
  const [index, setIndex] = useState(0);
  const [isAnimation, setIsAnimation] = useState(false);
  const squareWrapperRef = useRef(null);

  const filter = portfolio.filter((project) => project.name === title);
  const [{ name, technologies }] = filter;
  const skillsData = technologies.map((tech) => {
    return skills.filter((skill) => skill.name === tech);
  });
  const titleIndex = portfolio.findIndex((x) => x.name === title);

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
    const interval = setInterval(
      () =>
        index === portfolio[titleIndex].images.length - 1
          ? setIndex(0)
          : setIndex(index + 1),
      3000
    );

    return () => clearInterval(interval);
  }, [index, titleIndex]);

  useEffect(() => {
    // *** Grab the element related to this callback
    const { current } = squareWrapperRef;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && isSquare) {
        setIsAnimation(true);
      } else {
        setIsAnimation(false);
      }
    });
    observer.observe(current);
    return () => {
      observer.disconnect(current); // *** Use the same element
    };
  }, [isSquare]);

  return (
    <>
      <div className="square-wrapper" ref={squareWrapperRef}>
        <div
          className={`card ${isSquare && 'square'} ${
            isAnimation && 'square-animation'
          }`}
        >
          <header className="card-header">
            <h3
              className="card-header-title"
              onClick={() => {
                setRepoData(title);
                setRepoImages(portfolio[titleIndex].images);
                setProjectUrl(portfolio[titleIndex].url);
                setGithubUrl(portfolio[titleIndex].github);
                openModal();
              }}
            >
              {name}
            </h3>
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
                  <div key={i} className="mySlides fade" style={findStyle(i)}>
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
                    <a
                      href={portfolio[titleIndex].url}
                      className="is-link ml-1"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className="mr-1"
                        src="./images/eye.svg"
                        alt="eye-tag"
                        title="Click to preview"
                      />
                    </a>
                  </span>
                </p>
                <p className="card-footer-item">
                  <span>
                    <a
                      href={portfolio[titleIndex].github}
                      className="is-link ml-1"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        title="Github icon"
                        src="./images/github.svg"
                        alt="git-tag"
                      />
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

export default Project;
