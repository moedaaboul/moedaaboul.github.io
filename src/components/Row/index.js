import React from 'react';
import Project from '../Project';

const Row = ({ projects }) => {
  return (
    <div class="columns row-3">
      <div class="column is-4">
        <Project title={projects[0]} isSquare={true} />
      </div>
      <div class="column is-4">
        <Project title={projects[1]} isSquare={true} />
      </div>
      <div class="column is-4">
        <Project title={projects[2]} isSquare={true} />
      </div>
    </div>
  );
};

export default Row;
