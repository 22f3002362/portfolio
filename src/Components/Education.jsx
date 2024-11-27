import React from 'react';
import './Education.css'
import { FaGraduationCap, FaMedal, FaTrophy } from 'react-icons/fa';

function Education() {
  const education = [
    {
      degree: "BS in Data Science and Programming",
      school: "Indian Institute of Technology, Madras",
      period: "2022 - 2026",
      description: "Chennai, Tamil Nadu",
      achievements: [
        "Artificial Intelligence",
        "Programming",
        "Machine Learning"
      ]
    },
    {
      degree: "Bachelors of Science Chemistry(Hons.)",
      school: "Patliputra University",
      period: "2019 - 2022",
      description: "Bihar Sharif, Bihar",
      achievements: [
        "Chemistry",
      ]
    },
    {
      degree: "Intermediate",
      school: "Manav Bharti National School",
      period: "2017 - 2019",
      description: "Gaya, Bihar",
      achievements: [
        "Physics",
        "Chemistry",
        "Mathematics"
      ]
    },
    {
      degree: "Matricualtion",
      school: "DAV Public School",
      period: "2017",
      description: "Bihar Sharif, Bihar",
      achievements: [
        "Physics",
        "Chemistry",
        "Mathematics"
      ]
    },
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