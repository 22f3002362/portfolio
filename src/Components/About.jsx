import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text animate-on-scroll">
          <p>
            I'm a passionate software developer with expertise in building web
            applications. With a strong foundation in modern technologies and
            best practices, I create efficient and scalable solutions to complex
            problems.
          </p>
          <div className="hero-buttons fade-in">
            <a href="#contact" className="btn btn-outline">
              Know More 
            </a>
            <a href="https://drive.google.com/file/d/1xOt3cw6AJpU8drtTlkcOaVnfjWvpo6e4/view?usp=drive_link" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </div>
          <div className="skills">
            <h3>Skills</h3>
            <div className="skill-tags">
              <span style={{ "--delay": "0s" }} color="green">Python</span>
              <span style={{ "--delay": "0.1s" }}>React</span>
              <span style={{ "--delay": "0.2s" }}>Node.js</span>
              <span style={{ "--delay": "0.3s" }}>HTML5</span>
              <span style={{ "--delay": "0.4s" }}>CSS3</span>
              <span style={{ "--delay": "0.5s" }}>Github</span>
              <span style={{ "--delay": "0.6s" }}>Git</span>
              <span style={{ "--delay": "0.7s" }}>MySQL</span>
              <span style={{ "--delay": "0.8s" }}>PostgreSQL</span>
              <span style={{ "--delay": "0.9s" }}>MS Excel</span>
              <span style={{ "--delay": "1.0s" }}>Vercel</span>
              <span style={{ "--delay": "1.1s" }}>Bootstrap</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
