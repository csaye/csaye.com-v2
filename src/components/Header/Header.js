import './Header.css';

import logo from '../../images/logo.png';

function Header() {
  return (
    <div className="Header">
      <img src={logo} alt="logo" />
      <span className="flex-fill" />
      <a href="#home">HOME</a>
      <a href="#skillset">SKILLSET</a>
      <a href="#projects">PROJECTS</a>
    </div>
  );
}

export default Header;
