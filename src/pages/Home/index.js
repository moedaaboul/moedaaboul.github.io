import React from 'react';

const Home = () => {
  return (
    <section className="hero is-dark is-fullheight-with-navbar" id="about-me">
      <div className="hero-body">
        <div className="container">
          <p className="title is-slider-right">
            Hi there, I'm Muhammad
            <img
              src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
              width="25px"
              alt="hand waving gif"
            />
          </p>
          <div className="sub-title-wrapper">
            <p className="sub-title">
              I am a Full Stack Developer currently studying towards building
              modern, fast-loading and responsive web applications. Looking for
              an opportunity to contribute and share my passion for coding with
              organisations that strive for cutting-edge breakthroughs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
