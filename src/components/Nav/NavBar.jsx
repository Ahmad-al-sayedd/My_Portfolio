import Logo from "../../assets/Logo.png";
import { Link, useLocation } from "react-router-dom";
import "../Nav/Nav.scss";
import { useState, useEffect } from "react";
import { Squash } from "hamburger-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();

  // Debug activeLink changes
  useEffect(() => {
    console.log("Active link changed:", activeLink);
  }, [activeLink]);

  // Handle initial hash navigation
  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
          setActiveLink(location.hash);
        }, 100);
      }
    }
  }, [location]);

  // Set up scroll listener for section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "";
      const pageBottom = window.innerHeight + window.scrollY;

      // Special case for contact section at bottom
      if (pageBottom >= document.body.offsetHeight - 50) {
        currentSection = "#contact";
      } else {
        // Check other sections
        sections.forEach((section) => {
          const sectionId = section.getAttribute("id");
          if (!sectionId) return;

          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const sectionBottom = sectionTop + sectionHeight;

          if (
            window.scrollY >= sectionTop - 100 &&
            window.scrollY < sectionBottom - 100
          ) {
            currentSection = `#${sectionId}`;
          }
        });
      }

      if (currentSection && currentSection !== activeLink) {
        setActiveLink(currentSection);
      }
    };

    // Initial check
    handleScroll();

    // Add event listener
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeLink]);

  return (
    <nav id="navbar" className="header-nav">
      <a href="/">
        <img src={Logo} alt="logo letter" />
      </a>
      
      <ul className={`${isOpen ? "open" : "close"}`}>
        <li>
          <Link 
            className={activeLink === "#home" ? "active" : ""} 
            to="/#home"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            className={activeLink === "#about" ? "active" : ""} 
            to="/#about"
            onClick={() => setIsOpen(false)}
          >
            About Me
          </Link>
        </li>
        <li>
          <Link 
            className={activeLink === "#projects" ? "active" : ""} 
            to="/#projects"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link 
            className={activeLink === "#contact" ? "active" : ""} 
            to="/#contact"
            onClick={() => setIsOpen(false)}
          >
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