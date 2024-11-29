import { React, useState } from 'react';
import './Projects.css';

function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "Personal Portfolio",
      description: "A fully Responsive personal Portfolio Website using ReactJS and Javascript",
      technologies: ["React", "Javascript", "Vite"],
      link: "https://demo-portfolio-lac.vercel.app"
    },
    {
      title: "College Society Website",
      description: "A fully responsive frontend webpage for IRIS Photography Society whcih comes under the domain of IITM BS Degree",
      technologies: ["ReactJS", "Vercel", "Javascript","CSS"],
      link: "https://iris-iitm.vercel.app"
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card ${hoveredIndex === index ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
              <a href={project.link} className="btn" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
