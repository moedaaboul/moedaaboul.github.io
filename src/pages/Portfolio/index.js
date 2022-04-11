import React, { useState, useEffect } from 'react';
import Project from '../../components/Project';
import './index.css';
import Loader from '../../components/Loader';
import Row from '../../components/Row';

const firstRow = ['tech-blog', 'jobs-finder', 'team-profile-generator'];
const secondRow = ['quiz-app', 'weather-dashboard', 'password-generator'];

const Portfolio = () => {
  const [loading, setLoading] = useState(true);

  const styles = {
    hidden: {
      display: 'none',
    },
    show: {
      display: 'block',
    },
  };

  const loaderStyle = {
    body: {
      height: '100vh',
      margin: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading && (
        <div style={loaderStyle.body}>
          <Loader />
        </div>
      )}
      <div style={loading ? styles.hidden : styles.show}>
        <div className="portfolio-heading" id="portfolio">
          <h3 className="title is-2">Portfolio</h3>
          <h4 className="subtitle is-5">My latest works</h4>
        </div>
        <section className="portfolio container is-flex is-flex-direction-column">
          <div className="columns row-1">
            <div className="column is-12">
              <Project title="legogram" />
            </div>
          </div>
          <Row projects={firstRow} />
          <Row projects={secondRow} />
        </section>
      </div>
    </>
  );
};

export default Portfolio;
