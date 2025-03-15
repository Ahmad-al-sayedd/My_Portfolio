import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";














const Footer = () => {
    return (
      <footer id="Contact">
        <p>&copy; 2024 Ahmad Portfolio. All rights reserved.</p>
        <section>
          
          <a href="#">
            <FontAwesomeIcon icon={faFacebook} style={{ color: "#49f3f1", fontSize: "24px" }} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} style={{ color: "#49f3f1", fontSize: "24px" }} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faLinkedin} style={{ color: "#49f3f1", fontSize: "24px" }} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faGithub} style={{ color: "#49f3f1", fontSize: "24px" }} />
          </a>
        </section>
        <p>
          Contact me  <a href="tel:+49567890760">+49 567-890-760</a>
        </p>
        <p>
        Email <a href="mailto:ahmadsayed1lb@gmail.com">ahmadsayed1lb@gmail.com</a>
        </p>
      </footer>
    );
};

export default Footer;
