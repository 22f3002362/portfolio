import React from 'react';
import './Achievements.css';
import { FaCertificate, FaTrophy, FaHandsHelping } from 'react-icons/fa';

function Achievements() {
  const achievements = [
    {
      category: "Certifications",
      icon: <FaCertificate />,
      items: [
        {
          title: "AWS Certified Solutions Architect",
          issuer: "Amazon Web Services",
          date: "2023",
          description: "Professional certification for AWS cloud architecture"
        },
        {
          title: "Google Cloud Professional Developer",
          issuer: "Google Cloud",
          date: "2022",
          description: "Advanced certification for cloud development"
        }
      ]
    },
    {
      category: "Co-curricular Activities",
      icon: <FaTrophy />,
      items: [
        {
          title: "Tech Community Lead",
          organization: "Local Developer Community",
          period: "2021 - Present",
          description: "Organizing workshops and meetups for 500+ developers"
        },
        {
          title: "Hackathon Winner",
          organization: "Global Tech Hackathon",
          date: "2022",
          description: "First place in AI/ML category"
        }
      ]
    },
    {
      category: "Volunteer Work",
      icon: <FaHandsHelping />,
      items: [
        {
          title: "Code Mentor",
          organization: "Code.org",
          period: "2020 - Present",
          description: "Teaching programming to high school students"
        }
      ]
    }
  ];

  return (
    <section id="achievements" className="achievements">
      <h2 className="section-title">Achievements</h2>
      <div className="achievements-container">
        {achievements.map((category, index) => (
          <div 
            key={index} 
            className="achievement-section animate-on-scroll"
            style={{"--delay": `${index * 0.2}s`}}
          >
            <div className="category-header">
              <div className="category-icon">{category.icon}</div>
              <h3>{category.category}</h3>
            </div>
            <div className="achievement-cards">
              {category.items.map((item, i) => (
                <div key={i} className="achievement-card">
                  <div className="card-content">
                    <h4>{item.title}</h4>
                    <p className="organization">
                      {item.organization || item.issuer}
                    </p>
                    <p className="period">
                      {item.period || item.date}
                    </p>
                    <p className="description">{item.description}</p>
                  </div>
                  <div className="card-overlay"></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;