import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* <img src="/logo.webp" alt="Yogesh Yadav Logo" /> */}
        My Portfolio
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>

          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="navbar-button-wrapper">
        <a
          href="https://wa.me/919571973691?text=Hello%20Yogesh,%20I%20am%20interested%20in%20hiring%20you."
          target="_blank"
          rel="noreferrer"
          className="navbar-button"
        >
          Hire Me
        </a>
      </div>
      {!isMobileMenuOpen ? (
        <button className="mobile-nav" onClick={handleMobileMenu}>
          <FaBars />
        </button>
      ) : (
        <button className="mobile-nav cross" onClick={handleMobileMenu}>
          <RxCrossCircled />
        </button>
      )}
      {isMobileMenuOpen && (
        <ul className="mobile-Nlinks">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <a
          href="https://wa.me/919571973691?text=Hello%20Yogesh,%20I%20am%20interested%20in%20hiring%20you."
          target="_blank"
          rel="noreferrer"
          className="navbar-button"
        >
          Hire Me
        </a>
        </ul>
        
      )}
    </nav>
  );
}
export default Navbar;
