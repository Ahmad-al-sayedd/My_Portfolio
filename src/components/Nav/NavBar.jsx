import Logo from "../../assets/Logo.png"; // Going up two levels to access assets
import { NavLink } from "react-router-dom"; // Import NavLink for React Router navigation
import "../Nav/Nav.scss";
import { useState } from "react";
import Hamburger, { Squash } from "hamburger-react";
import { Squash as HamburgerSquash } from 'hamburger-react';
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control the menu opening and closing

  return (
    <nav id="navbar" className="header-nav">
      <a href="/">
        <img src={Logo} alt="logo letter" />
      </a>

      {/* Apply 'open' or 'close' class to ul based on isOpen state */}
      <ul className={` ${isOpen ? "open" : "close"}`}>
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

      {/* Hamburger
       button to toggle the menu */}
     <div className="custom-hamburger"
>
      <Squash
          toggled={isOpen}
          toggle={setIsOpen}
          size={40}
          direction="left"
          duration={0.8}
          distance="lg"
          rounded
          label="Show menu"
          color="#ffffff"
          easing="ease-in"
        />
     </div >
    
    
    </nav>
  );
};

export default NavBar;
