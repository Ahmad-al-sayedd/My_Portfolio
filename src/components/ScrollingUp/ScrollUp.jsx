import { FaHandPointUp } from "react-icons/fa";
import "./ScrollUp.scss"
import { NavLink } from "react-router";

const ScrollUp = () => {
  return (
   <div id='home'>
   
   <a href="/#" className="scrollUp">
        
        <FaHandPointUp className="icon" />

      </a>
   
   </div>

  )
}

export default ScrollUp
