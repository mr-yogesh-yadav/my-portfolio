import "./Projects.css";
import image1 from "../assets/Student.webp";
import image2 from "../assets/Restorent.webp";
import image3 from "../assets/Apple.webp"
import image4 from "../assets/peoject 4.webp"
function Projects() {
  const projects = [
    {
      link:"https://github.com/mr-yogesh-yadav/my-swigo",
      img: image4,
      number: "01",
      title: "Swigo Restorent website",
      category: "Responsive React Application",
      description: "A modern and fully responsive React-based restaurant website designed with reusable components, interactive UI sections, smooth navigation, and mobile-friendly layouts. The project includes multiple inner pages, responsive sliders, dynamic content sections, and reusable React components, providing a clean and engaging user experience across different screen sizes.",
      technologies: ["React", "JavaScript", "CSS"]
    },
    {
      link:"https://github.com/mr-yogesh-yadav/my-react-project",
      img: image1,
      number: "02",
      title: "Student Management System",
      category: "React Application",
      description: 
  "A React-based student management system with automatic grade generation and performance tracking, including pass, fail, highest, lowest, and average results.",
      technologies: ["React", "JavaScript", "CSS"],
    },
    {
      link:"https://github.com/mr-yogesh-yadav/First-project",
      img: image2,
      number: "03",
      title: "Restaurant Website",
      category: "React Web Application",
      description:
  "A responsive restaurant web application with an interactive menu, cart functionality, order details, and a seamless order confirmation flow.",
      technologies: ["React", "JavaScript", "CSS"],
    },
    {
      img: image3,
      number: "04",
      title: "Apple Store Website",
      category: "Responsive React Website",
      description:
  "A responsive Apple Store inspired website featuring a premium UI, product cards, product categories, and a clean modern shopping interface.",
      technologies: ["React", "JavaScript", "CSS"],
    },
  ];
  return (
    <section className="projects-section" id="projects">
      <div className="projects-heading">
        <p className="projects-subtitle">MY WORK</p>
        <h1>
          Featured <span>Projects</span>
        </h1>
        <p className="projects-intro">
          A selection of projects where I transform ideas into interactive and
          functional digital experiences.
        </p>
        <div className="heading-line"></div>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-img">
              <img src={project.img} />
            </div>
            <div className="project-top">
              <span className="project-number">{project.number}</span>
              <span className="project-category">{project.category}</span>
            </div>
            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <div className="project-buttons">
                <a href={project.link} target="blank" className="project-btn">
                  View Project <span>↗</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="projects-bottom">
        <p>More projects and experiments coming soon.</p>
      </div>
    </section>
  );
}

export default Projects;
