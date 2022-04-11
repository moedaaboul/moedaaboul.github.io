import React from 'react';
import Project from '../Project';

const Row = ({ projects }) => {
  return (
    <div className="columns row-3">
      <div className="column is-4">
        <Project title={projects[0]} isSquare={true} />
      </div>
      <div className="column is-4">
        <Project title={projects[1]} isSquare={true} />
      </div>
      <div className="column is-4">
        <Project title={projects[2]} isSquare={true} />
      </div>
    </div>
  );
};

export default Row;
