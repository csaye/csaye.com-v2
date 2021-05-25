import './Projects.css';

import { projects } from '../../data/projects.js';

import Project from './Project/Project.js';

function Projects() {
  return (
    <div className="Projects">
      <h1>Projects</h1>
      {
        projects.map((project, i) =>
          <Project key={`project-${i}`} data={project} id={i} />
        )
      }
    </div>
  );
}

export default Projects;
