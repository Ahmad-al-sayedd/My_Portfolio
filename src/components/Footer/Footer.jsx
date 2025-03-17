import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="contact">
      <p>&copy; 2024 Ahmad Portfolio. All rights reserved.</p>
      <section>
        <NavLink to="https://www.facebook.com/ahmad.sayyed.5" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} style={{ color: "#49f3f1", fontSize: "24px" }} />
        </NavLink>
        <NavLink to="https://www.instagram.com/ahmadsayyed5/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} style={{ color: "#49f3f1", fontSize: "24px" }} />
        </NavLink>
        <NavLink to="https://www.linkedin.com/in/ahmad-al-sayed1" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} style={{ color: "#49f3f1", fontSize: "24px" }} />
        </NavLink>
        <NavLink to="https://github.com/Ahmad-al-sayedd" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} style={{ color: "#49f3f1", fontSize: "24px" }} />
        </NavLink>
      </section>
      <p>
        Contact me <a href="tel:+49567890760">+49 567-890-760</a>
      </p>
      <p>
        Email <a href="mailto:ahmadsayed1lb@gmail.com">ahmadsayed1lb@gmail.com</a>
      </p>
    </footer>
  );
};

export default Footer;