import React from 'react';
import { skills, portfolio } from './data';

const Portfolio = () => {
  const filter = portfolio.filter((project) => project.name === 'legogram');
  const [{ github, images, name, technologies, url }] = filter;
  console.log(github, images, name, technologies, url);
  const skillsData = technologies.map((tech) => {
    return skills.filter((skill) => skill.name === tech);
  });
  console.log(skillsData);
  return (
    <>
      <div className="card">
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
            <div className="mySlides fade">
              <figure className="image is-6by3">
                <img src="images/legogram/legogram.png" alt="" />
              </figure>
            </div>
            <div className="mySlides fade">
              <figure className="image is-6by3">
                <img src="images/legogram/legogram2.png" alt="" />
              </figure>
            </div>
            <div className="mySlides fade">
              <figure className="image is-6by3">
                <img src="images/legogram/legogram3.png" alt="" />
              </figure>
            </div>
            <div className="mySlides fade">
              <figure className="image is-6by3">
                <img src="images/legogram/legogram4.png" alt="" />
              </figure>
            </div>
            <div className="mySlides fade">
              <figure className="image is-6by3">
                <img src="images/legogram/legogram5.png" alt="" />
              </figure>
            </div>
            <div className="mySlides fade">
              <figure className="image is-6by3">
                <img src="images/legogram/legogram6.png" alt="" />
              </figure>
            </div>
          </div>
          <footer className="card-footer">
            <p className="card-footer-item">
              <span>
                <a href="https://legogram.herokuapp.com/">Preview</a>
              </span>
            </p>
            <p className="card-footer-item">
              <span>
                View on
                <a
                  href="https://github.com/moedaaboul/legogram"
                  className="is-link"
                >
                  Github
                </a>
              </span>
            </p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
