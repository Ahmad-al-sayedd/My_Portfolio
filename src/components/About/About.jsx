import '../About/About.scss'
const About = () => {
  return (
    <section id="About Me" className="main-aboutMe">
    <h2>About Me</h2>
    <article>
      <p>
        I bring creativity and technical expertise to the world of web
        development, helping to create functional, visually appealing, and
        user-friendly websites. I role involves using programming languages
        such as HTML, CSS,JavaScript and React  to craft interactive web pages,
        ensuring that they are both responsive and optimized for
        performance. I have a deep understanding of both front-end and
        back-end development, enabling you to build everything from simple
        static sites to complex web applications. Additionally, i stay
        updated on the latest web technologies, frameworks, and design
        trends, allowing me to continuously improve user experience and
        solve challenging problems.
      </p>
      <div className="main-skills">
        <h3>Skills </h3>
        <ul>
          <li>
            HTML5
            <span className="progress-70"></span>
          </li>
          <li>
            CSS3
            <span className="progress-70"></span>
          </li>
          <li>
            JavaScript
            <span className="progress-50"></span>
          </li>
          <li>
            React
            <span className="progress-50"></span>
          </li>
          <li>
            Sass
            <span className="progress-60"></span>
          </li>
          <li>
            Bootsrap
            <span className="progress-60"></span>
          </li>
          <li>
            Git
            <span className="progress-70"></span>
          </li>
        </ul>
      </div>
    </article>
  </section>
  )
}

export default About
