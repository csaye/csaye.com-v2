import Icon from '../../Icon/Icon.js';

import './Project.css';

function Project(props) {
  const id = props.id;
  const { name, description, link, image, buttons, icons } = props.data;

  return (
    <div className="Project">
      <h2>{name}</h2>
      <p>{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={require(`../../../images/projects/${image}`).default}
          onClick={() => window.open(link)}
          alt={image}
        />
      </a>
      <div>
        {
          buttons.map((button, i) =>
            <a
              key={`project-${id}-button-${i}`}
              href={button.link}
              target="_blank"
              rel="noreferrer"
            >
              <button>{button.label}</button>
            </a>
          )
        }
      </div>
      <div className="icon-list">
        {
          icons.map((icon, i) =>
            <Icon key={`project-${id}-icon-${i}`} icon={icon} />
          )
        }
      </div>
    </div>
  );
}

export default Project;
