import React, { useState } from 'react';

import './Projects.css';

import { projects } from '../../data/projects.js';

import Title from '../Title/Title.js';
import Project from './Project/Project.js';

function Projects() {
  const [webActive, setWebActive] = useState(true);
  const [gameActive, setGameActive] = useState(true);
  const [otherActive, setOtherActive] = useState(true);

  // returns whether given project type is currently active
  function isActive(type) {
    return (type === 'web' && webActive) ||
      (type === 'game' && gameActive) ||
      (type === 'other' && otherActive);
  }

  return (
    <div className="Projects">
      <span id="projects" className="scrollto" />
      <Title title="Projects" />
      <div className="options">
        <label htmlFor="checkbox-webactive">
          <i className="fas fa-laptop-code icon-blue" />web
        </label>
        <input
          id="checkbox-webactive"
          type="checkbox"
          checked={webActive}
          onChange={e => setWebActive(e.target.checked)}
        />
        |
        <label htmlFor="checkbox-gameactive">
          <i className="fas fa-gamepad icon-green" />game
        </label>
        <input
          id="checkbox-gameactive"
          type="checkbox"
          checked={gameActive}
          onChange={e => setGameActive(e.target.checked)}
        />
        |
        <label htmlFor="checkbox-otheractive">
          <i className="fas fa-plus icon-red" />other
        </label>
        <input
          id="checkbox-otheractive"
          type="checkbox"
          checked={otherActive}
          onChange={e => setOtherActive(e.target.checked)}
        />
      </div>
      <div className="projects-list">
        {
          projects.filter(p => isActive(p.type)).map((p, i) =>
            <Project
              key={`project-${i}`}
              data={p}
              id={i}
            />
          )
        }
      </div>
    </div>
  );
}

export default Projects;
