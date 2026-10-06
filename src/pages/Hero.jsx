import "./Hero.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { TbBrandJavascript } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { FaLaptopCode } from "react-icons/fa";
import Particles from "../components/Particles";
function Hero() {
  return (
    <section className="hero"id="home">
      <Particles />
      <div className="backgrand">Portfolio</div>
      <div className="hero-content">
        <p className="hero-greeting">👋 Hello, I'm</p>
        <h1>
          Yogesh <span>Yadav</span>
        </h1>
        <h2>React Developer</h2>
        <p className="hero-description">
          I’m a passionate React Developer dedicated to creating modern,
          elegant, and intuitive digital experiences. With a strong foundation
          in JavaScript, React, HTML, and CSS, I build responsive web
          applications that balance refined design with seamless functionality.
          As a fresher, I’m continuously learning, experimenting with modern
          technologies, and turning ideas into meaningful digital experiences.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            <FaGithub />
            View My Projects{" "}
            <span>
              <FaArrowRightLong />
            </span>
          </a>
          <a href="#contact" className="secondary-btn">
            <IoIosCall />
            Contact Me
          </a>
        </div>
        <div className="hero-tech">
          <span>
            <FaHtml5 />
            HTML
          </span>
          <span>
            <IoLogoCss3 />
            CSS
          </span>
          <span>
            <TbBrandJavascript />
            JavaScript
          </span>
          <span>
            <FaReact />
            React
          </span>
        </div>
      </div>
      <div className="hero-image">
        <div className="image-circle">
          <img src="/hero.webp" alt="Yogesh Yadav" />
          <div className="flot-card">
            <span><FaReact /></span>
            <span>
            <small>React</small>
            <p>Developer</p>
            </span>
          </div>
          <div className="flot-card-a">
            <span><FaLaptopCode/></span>
            <span>
            <small>Building</small>
            <p>Better Web <span>Experiences</span></p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
