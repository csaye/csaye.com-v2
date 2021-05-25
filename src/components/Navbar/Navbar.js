import './Navbar.css';

import logo from '../../images/logo.png';

function Navbar() {
  return (
    <div className="Navbar">
      <img src={logo} alt="logo" />
      <span className="flex-fill" />
      <a className="nav-link" href="/">HOME</a>
      <a className="nav-link" href="projects">PROJECTS</a>
      <a className="nav-link" href="music">MUSIC</a>
    </div>
  );
}

export default Navbar;
