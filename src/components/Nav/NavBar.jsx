import Logo from "../../assets/Logo.png";
import { Link, useLocation } from "react-router-dom";
import "../Nav/Nav.scss";
import { useState, useEffect } from "react";
import { Squash } from "hamburger-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
 

  const location = useLocation();
console.log(location.hash);

  const handleActive = (e) => {
    const linkHash = e.target.getAttribute("href").split("/").slice(1).join();
    setActiveLink(linkHash);
  };

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      console.log(section);
      
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <nav id="navbar" className="header-nav">
      <a href="/">
        <img src={Logo} alt="logo letter" />
      </a>
      <ul className={` ${isOpen ? "open" : "close"}`}>
        <li>
          <Link
            className={activeLink === "#home" ? "active" : ""}
            onClick={handleActive}
            to="/#home"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={activeLink === "#about" ? "active" : ""}
            onClick={handleActive}
            to="/#about"
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            className={activeLink === "#projects" ? "active" : ""}
            onClick={handleActive}
            to="/#projects"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className={activeLink === "#contact" ? "active" : ""}
            onClick={handleActive}
            to="/#contact"
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="custom-hamburger">
        <Squash
          toggled={isOpen}
          toggle={setIsOpen}
          size={30}
          direction="left"
          duration={0.8}
          distance="lg"
          rounded
          label="Show menu"
          color="#ffffff"
          easing="ease-in"
        />
      </div>
    </nav>
  );
};

export default NavBar;
