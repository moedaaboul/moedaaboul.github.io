import React from 'react';
import './index.css';
import Image from './profile.png';
const Home = () => {
  return (
    <section className="hero is-dark is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container">
          <figure className="m-5 image is-128x128">
            <img
              className="image is-rounded fade"
              src={Image}
              // height="200"
              alt="muhammad daaboul"
            />
          </figure>
          <p className="title is-slider-right">
            Hi there, I'm Muhammad
            <img
              src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
              width="25px"
              alt="hand waving gif"
            />
          </p>
          <div className="sub-title-wrapper is-slider-up">
            <p className="sub-title">I am a Software Developer.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
