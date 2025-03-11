import Logo from "../../assets/Logo.png"; // Going up two levels to access assets
import { NavLink } from "react-router-dom"; // Import NavLink for React Router navigation
import "../Nav/Nav.scss";

const NavBar = () => {
  return (
    <>
      <nav id="navbar" className="header-nav">
        <a href="/">
          <img src={Logo} alt="logo letter" />
        </a>

        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Me</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
