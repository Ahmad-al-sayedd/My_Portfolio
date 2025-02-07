import Logo from '../../assets/Logo.png'; // Going up two levels to access assets
import '../Nav/Nav.scss'
const NavBar = () => {
  return (
    <nav id="navbar" className="header-nav">
      <a href="#">
        <img src={Logo} alt="logo letter" />
      </a>

      <ul>
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#AboutMe">About Me</a>
        </li>
        <li>
          <a href="#Projects">Projects</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
