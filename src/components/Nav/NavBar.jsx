import Logo from "../../assets/Logo.png";
import { Link, useLocation } from "react-router-dom";
import "../Nav/Nav.scss";
import { useState, useEffect } from "react";
import { Squash } from "hamburger-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let scrollPosition = window.scrollY + 100; // Offset to detect early

      sections.forEach((section) => {
        const id = section.getAttribute("id");
        if (id) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveLink(`#${id}`);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call initially to set active link on load

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav id="navbar" className="header-nav">
      <a href="/">
        <img src={Logo} alt="logo letter" />
      </a>
      <ul className={` ${isOpen ? "open" : "close"}`}>
        <li>
          <Link className={activeLink === "#home" ? "active" : ""} to="/#home">
            Home
          </Link>
        </li>
        <li>
          <Link className={activeLink === "#about" ? "active" : ""} to="/#about">
            About Me
          </Link>
        </li>
        <li>
          <Link className={activeLink === "#projects" ? "active" : ""} to="/#projects">
            Projects
          </Link>
        </li>
        <li>
          <Link className={activeLink === "#contact" ? "active" : ""} to="/#contact">
            Contact
          </Link>
        </li>
      </ul>




      <div className="custom-hamburger">
  <Squash
    toggled={isOpen}
    toggle={() => setIsOpen((prev) => !prev)} 
    size={30}
    direction="left"
    duration={0.5} 
    distance="md" 
    rounded
    label="Show menu"
    color="#ffffff"
    easing="ease-in-out"
  />
</div>

    </nav>
  );
};

export default NavBar;
