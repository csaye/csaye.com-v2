import Icon from '../../Icon/Icon.js';

import './Project.css';

function Project(props) {
  const id = props.id;
  const { name, description, link, image, video, buttons, icons, type } = props.data;

  return (
    <div className="Project">
      <div className="type-icon">
        {type === 'web' && <i className="fas fa-laptop-code icon-blue" />}
        {type === 'game' && <i className="fas fa-gamepad icon-green" />}
        {type === 'other' && <i className="fas fa-plus icon-red" />}
      </div>
      <h1>{name}</h1>
      <p>{description}</p>
      {
        image &&
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
      }
      {
        video &&
        <iframe
          title={`project-${id}-video`}
          width="560"
          src={video}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      }
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
