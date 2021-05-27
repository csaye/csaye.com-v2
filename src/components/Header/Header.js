import './Header.css';

import logo from '../../images/logo.png';

// get darkmode stylesheet
const stylesheet = document.getElementById("stylesheet-darkmode");
stylesheet.disabled = true;

function Header() {
  // toggles darkmode stylesheet
  function setDarkmode(isDarkmode) {
    stylesheet.disabled = !isDarkmode;
  }

  return (
    <div className="Header">
      <a href="#home">
        <img src={logo} alt="logo" />
      </a>
      <label className="switch">
        <input type="checkbox" onChange={e => setDarkmode(e.target.checked)} />
        <span className="slider" />
      </label>
      <span className="flex-fill" />
      <a className="link" href="#home">HOME</a>
      <a className="link" href="#skillset">SKILLSET</a>
      <a className="link" href="#projects">PROJECTS</a>
    </div>
  );
}

export default Header;
