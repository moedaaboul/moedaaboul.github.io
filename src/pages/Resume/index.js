import React from 'react';
import './index.css';
import { skills } from '../../data';
import Button from '../../components/Button';
import { FaDownload, FaStreetView } from 'react-icons/fa';
const Resume = () => {
  return (
    <>
      <div className="container">
        <div className="portfolio-heading" id="portfolio">
          <h3 className="title is-2">Resume</h3>
          <div class="is-centered">
            <Button
              download={true}
              text="Download CV"
              classDetails="is-primary button ml-3"
              icon={<FaDownload />}
            />
            <Button
              text="View CV"
              classDetails="is-info button ml-3"
              icon={<FaStreetView />}
            />
          </div>
          <h4 className="subtitle is-5 m-3">My skills</h4>
        </div>
        <div className="columns is-multiline is-centered">
          <div className="column is-8"></div>
          {skills.map((e, i) => {
            const even = i % 2 === 0;
            return (
              <div
                className={`card column m-3 is-4 grow ${
                  even ? 'is-slider-right-smooth' : 'is-slider-left-smooth'
                }`}
              >
                <div className="is-flex is-align-items-center">
                  <figure key={i} className="image is-32x32 mr-1">
                    <img
                      className={e.classDesc}
                      src={e.src}
                      title={`${e.name} icon`}
                      alt={e.name}
                    ></img>
                  </figure>
                  <div className="ml-1">
                    <p className="has-text-weight-medium">{e.name}</p>
                    <p className="has-text-grey-light">{e.type}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* <a key={id} className="navbar-item" {...urlAttribute}>
        <span className="icon">{icon}</span>
        <span>{text}</span>
      </a> */}
    </>
  );
};

export default Resume;
