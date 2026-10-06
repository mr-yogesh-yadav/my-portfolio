import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>Yogesh Yadav</h2>
          <p>
            React Developer focused on building modern, responsive, and engaging
            web experiences.
          </p>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-column">
          <h3>Connect</h3>
          <a href="mailto:yogeshydav@gmail.com">Email</a>
          <a href="https://github.com/mr-yogesh-yadav" target="_blank" rel="noreferrer"
          >
            GitHub
          </a>
          <a href="tel:9571973691">Phone</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Yogesh Yadav. All rights reserved.</p>
        <p>
          Designed & Built with <span>♥</span> using React
        </p>
      </div>
    </footer>
  );
}

export default Footer;
