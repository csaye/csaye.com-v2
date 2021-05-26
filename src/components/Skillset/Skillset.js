import Title from '../Title/Title.js';
import Icon from '../Icon/Icon.js';

import { skillset } from '../../data/skillset.js';

import './Skillset.css';

function Skillset() {
  return (
    <div className="Skillset">
      <span id="skillset" className="scrollto" />
      <Title title="Skillset" />
      <div className="sections">
        {
          skillset.map((section, i) =>
            <div key={`skillset-${i}`} className="section">
              <h1>{section.title} {section.icon}</h1>
              <hr />
              {
                section.icons.map((item, j) =>
                  <Icon key={`skillset-${i}-item-${j}`} icon={item} />
                )
              }
            </div>
          )
        }
      </div>
    </div>
  );
}

export default Skillset;
