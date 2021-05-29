import React, { useState } from 'react';

import './Header.css';

import logo from '../../images/logo.png';

// get darkmode stylesheet
const stylesheet = document.getElementById("stylesheet-darkmode");
stylesheet.disabled = true;

function Header() {
  const [dropdown, setDropdown] = useState(false);

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

      <div className="dropdown">
        <button className={dropdown ? "dropbtn" : "dropbtn faceright"} onClick={() => setDropdown(!dropdown)}>
          <i className="fas fa-caret-down" />
        </button>
        {
          dropdown &&
          <div className="dropdown-content">
            <a className="drop-link" href="#home">HOME</a>
            <a className="drop-link" href="#skillset">SKILLSET</a>
            <a className="drop-link" href="#projects">PROJECTS</a>
          </div>
        }
      </div>
    </div>
  );
}

export default Header;
