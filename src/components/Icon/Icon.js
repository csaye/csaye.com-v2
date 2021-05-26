import { icons } from '../../data/icons.js';

import './Icon.css';

function Icon(props) {
  const icon = props.icon;

  return (
    <div className="Icon">
      {icons[icon] || <b>icon {icon} not found</b>}
    </div>
  );
}

export default Icon;
