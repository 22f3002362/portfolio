import React from 'react';
import './Education.css'
import { FaGraduationCap, FaMedal, FaTrophy } from 'react-icons/fa';

function Education() {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Technology",
      period: "2018 - 2022",
      description: "Graduated with First Class Honours. Specialized in Software Engineering and AI.",
      achievements: [
        "Dean's List for Academic Excellence",
        "Best Final Year Project Award",
        "Student Representative Council"
      ]
    },
    {
      degree: "High School Diploma",
      school: "Central High School",
      period: "2016 - 2018",
      description: "Graduated with distinction in Mathematics and Computer Science.",
      achievements: [
        "School Captain",
        "Mathematics Olympiad Gold Medal",
        "Computer Science Club President"
      ]
    }
  ];

  return (
    <section id="education" className="education">
      <h2 className="section-title">Education</h2>
      <div className="education-cards">
        {education.map((edu, index) => (
          <div 
            key={index} 
            className="education-card animate-on-scroll"
            style={{"--delay": `${index * 0.2}s`}}
          >
            <div className="education-icon">
              <FaGraduationCap />
            </div>
            <div className="education-details">
              <div className="education-header">
                <h3>{edu.degree}</h3>
                <span className="period">{edu.period}</span>
              </div>
              <h4>{edu.school}</h4>
              <p className="description">{edu.description}</p>
              <div className="achievements-grid">
                {edu.achievements.map((achievement, i) => (
                  <div key={i} className="achievement-badge">
                    {i % 2 === 0 ? <FaMedal className="badge-icon" /> : <FaTrophy className="badge-icon" />}
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;