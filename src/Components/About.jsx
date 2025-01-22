import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text animate-on-scroll">
          <p>
            I am a passionate software developer and graphic designer with
            expertise in building web applications and creating visually
            compelling designs. With a strong foundation in modern technologies
            and creative tools, I craft efficient, scalable solutions to complex
            problems while delivering impactful designs that elevate user
            experiences.
          </p>
          <div className="hero-buttons fade-in">
            <a
              href="https://drive.google.com/file/d/1PMpFeledUKuBSeckw-gt7sUyODO9_owT/view?usp=sharing"
              className="btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
          <div className="skills">
            <h3>Skills</h3>
            <div className="skill-tags">
              <span style={{ "--delay": "0s" }} color="green">
                Python
              </span>
              <span style={{ "--delay": "0.1s" }}>React.js</span>
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
              <span style={{ "--delay": "1.2s" }}>Canva Pro</span>
              <span style={{ "--delay": "1.3s" }}>Flask</span>
              <span style={{ "--delay": "1.4s" }}>SQLite</span>
              <span style={{ "--delay": "1.5s" }}>Next.js</span>
              <span style={{ "--delay": "1.6s" }}>Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
