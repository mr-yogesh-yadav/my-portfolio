import "./About.css";

function About() {
  return (
    <section className="about-page" id="about">
        <div className="about-heading">
          <p>GET TO KNOW ME</p>
          <h1>About <span>Me</span></h1>
          <div className="heading-line"></div>
        </div>
        <div className="about-content">
          <div className="about-text">
            <h2>
              I'm <span>Yogesh Yadav</span>, a Web Developer.
            </h2>
            <p>
              I’m a passionate Frontend Developer who enjoys creating
              modern, responsive, and user-friendly web experiences.
              I love turning ideas into clean and interactive interfaces
              using modern web technologies.
            </p>
            <p>
              I have a strong foundation in HTML, CSS, JavaScript, and
              React. I’m continuously improving my skills by building
              real-world projects and exploring new frontend techniques.
            </p>
            <p>
              As a fresher, my goal is to start my professional journey
              as a Frontend Developer, contribute to meaningful projects,
              and grow as a developer through continuous learning.
            </p>
            <div className="about-buttons">
              <a href="#projects" className="about-btn">
                View My Projects →
              </a>
              <a href="#contact" className="about-btn-outline">
                Contact Me
              </a>
            </div>
          </div>
          <div className="about-info">
            <a href="#education">
            <div className="info-card">
              <span>🎓</span>
              <div>
                <h3>Education</h3>
                <p>12th Pass · Currently pursuing BA</p>
              </div>
            </div>
            </a>
            <a href="#projects">
            <div className="info-card">
              <span>💻</span>
              <div>
                <h3>Role</h3>
                <p>Frontend Developer</p>
              </div>
            </div>
            </a>
            <div className="info-card">
              <span>⚡</span>
              <div>
                <h3>Experience</h3>
                <p>Fresher</p>
              </div>
            </div>
            <div className="info-card">
              <span>🚀</span>
              <div>
                <h3>Focus</h3>
                <p>Modern & Responsive Web Development</p>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}

export default About;