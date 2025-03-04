
import "./Projects.scss"


const projects = [
    {
      imgSrc: "./images/Screenshot from 2024-09-24 10-50-24.png",
      altText: "project",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, hic iure! Laborum, explicabo accusamus! Minima blanditiis fugiat eum veniam doloremque!",
      link: "https://github.com/Ahmad-al-sayedd",
    },
    {
      imgSrc: "./images/Screenshot from 2024-09-23 13-02-25.png",
      altText: "Pojectimg",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, hic iure! Laborum, explicabo accusamus! Minima blanditiis fugiat eum veniam doloremque!",
      link: "https://github.com/Ahmad-al-sayedd",
    },
    {
      imgSrc: "./images//Screenshot from 2024-09-23 13-46-54.png",
      altText: "Pojectimg",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, hic iure! Laborum, explicabo accusamus! Minima blanditiis fugiat eum veniam doloremque!",
      link: "https://github.com/Ahmad-al-sayedd",
    },
    {
      imgSrc: "./images/Screenshot from 2024-09-23 13-08-25.png",
      altText: "Pojectimg",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, hic iure! Laborum, explicabo accusamus! Minima blanditiis fugiat eum veniam doloremque!",
      link: "https://github.com/Ahmad-al-sayedd",
    },
  ];
  
  export default function Projects() {
    return (
      <section id="Projects" className="main-projects">
        <h2>Projects</h2>
        {projects.map((project, index) => (
          <article key={index}>
            <figure>
              <img src={project.imgSrc} alt={project.altText} />
            </figure>
            <div>
              <p>{project.description}</p>
              <button>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  More Infos
                </a>
              </button>
            </div>
          </article>
        ))}
      </section>
    );
  }
  