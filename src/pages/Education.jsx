import "./Education.css";
import image1 from "../assets/Aadhar School.webp";
import image2 from "../assets/Compus.0iw6hhwp5rb97.webp";
import { FaArrowRightLong } from "react-icons/fa6";
import image3 from "../assets/ChatGPT Image Sep 29, 2026, 01_46_12 PM.webp"
function Education() {
  return (
    <section className="education-section" id="education" >
      <div className="education-heading" >
        <p className="education-subtitle">MY ACADEMIC JOURNEY</p>
        <h1>
          Education & <span>Learning</span>
        </h1>
        <p className="education-intro">
          A journey of academic growth, continuous learning, and practical
          development that shaped my skills as a React Developer.
        </p>
      </div>
      <div className="cards">
        <div className="education-card education-school">
          <div className="education-image">
            <img src={image1} alt="School" />
          </div>
          <div className="education-content">
            <div className="education-label">SECONDARY EDUCATION</div>
            <h2>12th Grade</h2>
            <p className="education-place">School Education</p>
            <p className="education-description">
              Successfully completed higher secondary education with a
              foundation that supported my further academic and technical
              learning journey.
            </p>
            <div className="marks-section">
              <h3>Subjects & Marks</h3>
              <div className="marks-grid">
                <div className="mark-box">
                  <strong>PCB</strong>
                  <span>60.00%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="education-card education-training">
          <div className="training-image">
            <img src={image2} alt="Web Development Training" />
          </div>
          <div className="education-content">
            <div className="education-label">PROFESSIONAL TRAINING</div>
            <h2>Web Development Training</h2>
            <p className="education-place">Website Development Coaching</p>
            <p className="education-description">
              Completed practical training in modern website development,
              focusing on building responsive and interactive web applications.
            </p>
            <div className="training-skills">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
            </div>
            <div className="training-link">
              <a href="https://jainscomputer.com/" target="_blank" rel="noopener noreferrer">More Info<FaArrowRightLong /></a>
            </div>
          </div>
        </div>
        <div className="education-card education-ba">
          <div className="education-content">
            <div className="education-label">CURRENTLY PURSUING</div>
            <h2>Bachelor of Arts</h2>
            <p className="education-place">BA · College</p>
            <p className="education-description">
              I am doing this solely to get the degree; my actual interest lies in web development within the BCA program.
            </p>
            <div className="education-status">
              <span className="status-dot"></span>
              Currently Studying
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Education;
