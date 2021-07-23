import { icons } from '../../data/icons.js';

import './Icon.css';

export default function Icon(props) {
  const icon = props.icon;

  // if invalid icon, return not found
  if (!icons[icon]) return (
    <div className="Icon">{icon} not found</div>
  );

  return (
    <div className="Icon">
      <a
        href={icons[icon].website}
        target="_blank"
        rel="noopener noreferrer"
      >
        {icon}{icons[icon].icon}
      </a>
    </div>
  );
}
