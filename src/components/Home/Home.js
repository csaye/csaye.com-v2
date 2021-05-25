import Title from '../Title/Title.js';
import Contact from '../Contact/Contact.js';
import Skillset from '../Skillset/Skillset.js';
import Projects from '../Projects/Projects.js';

import { projects } from '../../data/projects.js';

import './Home.css';

function Home() {
  return (
    <div className="Home">
      <Title main={true} title="Cooper Saye" subtitle="web and game developer" />
      <Contact />
      <Skillset />
      <Projects />
    </div>
  );
}

export default Home;
