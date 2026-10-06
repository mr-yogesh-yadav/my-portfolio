import "./Skills.css";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
function Skills() {
  const skills = [
    {
      icon: <IoLogoHtml5 />,
      name: "HTML5",
      level: "Advanced",
      description: "Semantic and well-structured web pages",
    },
    {
      icon: <IoLogoCss3 />,
      name: "CSS3",
      level: "Advanced",
      description: "Responsive layouts and modern UI styling",
    },
    {
      icon: <TbBrandJavascript />,
      name: "JavaScript",
      level: "Advanced",
      description: "Interactive features and dynamic functionality",
    },
    {
      icon: <FaReact />,
      name: "React",
      level: "Advanced",
      description: "Component-based and interactive web applications",
    },
  ];
  return (
    <section className="skills-section">
      <div className="skills-heading">
        <div className="skills-subtitle">
          MY EXPERTISE
          <div className="line"></div>
        </div>
        <h1>
          Skills & <span>Technologies</span>
        </h1>
        <p className="skills-intro">
          The technologies and tools I use to transform ideas into modern,
          responsive, and engaging web experiences.
        </p>
        <div className="heading-line"></div>
      </div>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <h2>{skill.icon}</h2>
            <div className="skill-content">
              <h2>{skill.name}</h2>
              <span className="skill-level">{skill.level}</span>
              <p>{skill.description}</p>
            </div>
            <div className="skill-number">0{index + 1}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Skills;
