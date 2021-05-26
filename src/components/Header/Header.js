import './Header.css';

import logo from '../../images/logo.png';

function Header() {
  return (
    <div className="Header">
      <a href="#home">
        <img src={logo} alt="logo" />
      </a>
      <span className="flex-fill" />
      <a className="link" href="#home">HOME</a>
      <a className="link" href="#skillset">SKILLSET</a>
      <a className="link" href="#projects">PROJECTS</a>
    </div>
  );
}

export default Header;
