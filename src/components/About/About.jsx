import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "../About/About.scss";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Professional experience data from CV
  const professionalBackground = [
    {
      period: "2024-2025",
      role: "Web Development Student",
      institution: "DCI Institute",
      details: [
        "Currently enrolled in comprehensive web development program",
        "Focusing on modern JavaScript frameworks and full-stack development"
      ]
    },


    {
      period: "2023-2024", 
      role: "German Language Student & Integration",
      institution: "Language Schools & Orientation Centers",
      details: [
        "Achieved German language certification at B2 level through intensive study",
        "Completed government-mandated orientation course (Orientierungskurs)",
        "Participated in job application coaching and skills development programs",
        "Focused on cultural integration and professional preparation in Germany"
      ]
    },

    {
      period: "2021-2022",
      role: "Service Staff & Self-Taught Developer",
      institution: "Ukraine",
      details: [
        "Balanced restaurant work with intensive frontend development training",
        "Completed 500+ hours of online courses in JavaScript and React"
      ]
    },
    {
      period: "2017-2020",
      role: "Real Estate Management Specialist",
      institution: "Lebanese Government",
      details: [
        "Managed contracts and archival systems for government properties",
        "Developed transferable skills in organization and problem-solving"
      ]
    },
    {
      period: "2010-2016",
      role: "Civil Engineering Education",
      institution: "Kharkiv National University",
      details: [
        "Earned Bachelor's and Master's degrees in Civil Engineering",
        "Developed strong analytical and technical problem-solving skills"
      ]
    }
  ];

  // Your existing skills arrays...
  const skills1 = [
    { name: "HTML5", level: 70, className: "progress-70" },
    { name: "CSS3", level: 70, className: "progress-70" },
    { name: "JavaScript", level: 80, className: "progress-80" },
    { name: "React", level: 55, className: "progress-70" },
    { name: "React-Router", level: 55, className: "progress-60" },
    { name: "React-Hooks", level: 55, className: "progress-70" },
  ];

  const skills2 = [
    { name: "Sass", level: 60, className: "progress-60" },
    { name: "Bootstrap", level: 60, className: "progress-60" },
    { name: "Git", level: 60, className: "progress-70" },
    { name: "NodeJs-Express", level: 40, className: "progress-50" },
    { name: "mongoDb", level: 40, className: "progress-50" },
  ];

  return (
    <motion.section
      id="about"
      className="aboutMe"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <h2>About Me</h2>
      <article>
        <p>
        I bring creativity and technical expertise to the world of web development, helping to create functional, visually appealing, and user-friendly websites. My role involves using programming languages such as HTML5, CSS3, JavaScript, React, React-router, React-hooks and Express to craft interactive web pages, ensuring they are both responsive and optimized for performance. I have a deep understanding of both front-end and back-end development, enabling me to build everything from simple static sites to complex web applications. Additionally, I stay updated on the latest web technologies, frameworks, and design trends, allowing me to continuously improve user experience and solve challenging problems.
        </p>

        {/* Professional Timeline Section */}
        <div className="professional-timeline">
          <h3>Professional Journey</h3>
          {professionalBackground.map((item, index) => (
            <motion.div 
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 * index }}
            >
              <div className="timeline-period">{item.period}</div>
              <div className="timeline-content">
                <h4>{item.role}</h4>
                <p className="institution">{item.institution}</p>
                <ul>
                  {item.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Your existing skills section */}
        <div className="skills-container">
          <div className="skills">
            <h3>Technical Skills</h3>
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