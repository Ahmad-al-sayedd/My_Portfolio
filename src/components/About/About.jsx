import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "../About/About.scss";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skills1 = [
    { name: "HTML5", level: 70, className: "progress-70" },
    { name: "CSS3", level: 70, className: "progress-70" },
    { name: "JavaScript", level: 50, className: "progress-50" },
    { name: "React", level: 50, className: "progress-50" },
    { name: "React-Router", level: 70, className: "progress-70" },
    { name: "React-Hooks", level: 70, className: "progress-70" },
  ];

  const skills2 = [
    { name: "Sass", level: 60, className: "progress-60" },
    { name: "Bootstrap", level: 60, className: "progress-60" },
    { name: "Git", level: 70, className: "progress-70" },
    { name: "NodeJs-Express", level: 70, className: "progress-70" },
    { name: "mongoDb", level: 70, className: "progress-70" },
  ];

  return (
    <motion.section
      id="About Me"
      className="aboutMe"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <h2>About Me</h2>
      <article>
        <p>
          I bring creativity and technical expertise to the world of web
          development, helping to create functional, visually appealing, and
          user-friendly websites. My role involves using programming languages
          such as <strong>HTML, CSS, JavaScript, and React</strong> to craft interactive web pages,
          ensuring they are both responsive and optimized for performance. I have
          a deep understanding of both front-end and back-end development,
          enabling me to build everything from simple static sites to complex web
          applications. Additionally, I stay updated on the latest web
          technologies, frameworks, and design trends, allowing me to continuously
          improve user experience and solve challenging problems.
        </p>

        <div className="skills-container">
          <div className="skills">
            <h3>Skills :</h3>
            <ul>

            <div className="skills-ul">
            {skills1.map((skill, index) => (
                <motion.li
                  key={skill.name}
                  className="skill-item"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                >
                  {skill.name}
                  <motion.span
                    className={skill.className}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.5 + 0.2 * index }}
                  />
                </motion.li>
              ))}
            </div>

                       <div className="skills-ul">
                       {skills2.map((skill, index) => (
                <motion.li
                  key={skill.name}
                  className="skill-item2"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                >
                  {skill.name}
                  <motion.span
                    className={skill.className}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.5 + 0.2 * index }}
                  />
                </motion.li>
              ))}
                        </div>       

             
            </ul>
          </div>

          
        </div>
      </article>
    </motion.section>
  );
};

export default About;
