import './Header.css';

import logo from '../../images/logo.png';

function Header() {
  return (
    <div className="Header">
      <img src={logo} alt="logo" />
      <span className="flex-fill" />
      <a className="nav-link" href="/">HOME</a>
      <a className="nav-link" href="projects">PROJECTS</a>
      <a className="nav-link" href="music">MUSIC</a>
    </div>
  );
}

export default Header;
