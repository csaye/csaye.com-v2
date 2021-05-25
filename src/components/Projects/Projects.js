import './Projects.css';

import { projects } from '../../data/projects.js';

import Title from '../Title/Title.js';
import Project from './Project/Project.js';

function Projects() {
  return (
    <div className="Projects">
      <Title title="Projects" />
      <div className="projects-list">
        {
          projects.map((project, i) =>
            <Project key={`project-${i}`} data={project} id={i} />
          )
        }
      </div>
    </div>
  );
}

export default Projects;
