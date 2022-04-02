import React from 'react';
import Card from './Card';

const Portfolio = () => {
  return (
    <>
      <div className="portfolio-heading" id="portfolio">
        <h3 className="title is-2">Portfolio</h3>
        <h4 className="subtitle is-5">My latest works</h4>
      </div>
      <section className="portfolio container is-flex is-flex-direction-column">
        <div className="columns row-1">
          <div className="column is-12">
            <Card title="legogram" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
