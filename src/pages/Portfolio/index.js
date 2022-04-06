import React from 'react';
import Card from '../../components/Card';

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
        <div class="columns row-3">
          <div class="column is-4">
            <Card title="tech-blog" isSquare={true} />
          </div>
          <div class="column is-4">
            <Card title="jobs-finder" isSquare={true} />
          </div>
          <div class="column is-4">
            <Card title="team-profile-generator" isSquare={true} />
          </div>
        </div>
        <div class="columns row-3">
          <div class="column is-4">
            <Card title="quiz-app" isSquare={true} />
          </div>
          <div class="column is-4">
            <Card title="weather-dashboard" isSquare={true} />
          </div>
          <div class="column is-4">
            <Card title="password-generator" isSquare={true} />
          </div>
        </div>
        {/* <div class="columns row-3">
              <div class="column is-4">
                
                  <Card title="quiz-app" isSquare={true} />
                  <Card title="weather-dashboard" isSquare={true} />
                  <Card title="password-generator" isSquare={true} />
                </div>
              </div>
            </div> */}
      </section>
    </>
  );
};

export default Portfolio;
