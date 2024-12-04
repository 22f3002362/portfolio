import React from "react";
import "./Achievements.css";
import { FaCertificate, FaTrophy, FaHandsHelping } from "react-icons/fa";

function Achievements() {
  const achievements = [
    {
      category: "Certifications",
      icon: <FaCertificate />,
      items: [
        {
          title: "SQL (Basic)",
          issuer: "HackerRank",
          date: "2024",
          description:
            "Certified in SQL Basics, skilled in foundational database querying and data manipulation.",
          link: "https://www.hackerrank.com/certificates/iframe/7406c387e65b",
        },
        {
          title: "Prompt Design in Vertex AI",
          issuer: "Google Cloud",
          date: "2022",
          description: "Mastered advanced prompt engineering techniques for AI models using Vertex AI on Google Cloud.",
          link:"https://www.credly.com/badges/090c8526-d9cc-4d1d-812a-4d47844f8626/linked_in_profile"
        },
        {
          title: "MS Excel (Advanced)",
          issuer: "Younity.in",
          date: "2022",
          description: "Certified in Advanced MS Excel, proficient in complex data analysis, visualization, and automation techniques.",
          link:"https://drive.google.com/file/d/1SY4n_L-5K34ZG4os73gtLXMje0eVrKr0/view?usp=sharing"
        },
        {
          title: "Data Science Simulation - British Airways",
          issuer: "Forage.com",
          date: "2024",
          description: "Completed Data Science Simulation by British Airways, skilled in applying analytical techniques to solve real-world business problems.",
          link:"https://drive.google.com/file/d/1jW6xlz-S8nUSxZLvwhnXsXKUBCXV-jXb/view?usp=drive_link"
        },
        {
          title: "Google Workspace Tools",
          issuer: "Google Cloud",
          date: "2024",
          description: "Certified in Google Workspace Tools, adept at leveraging collaborative and productivity applications effectively.",
          link:"https://www.credly.com/badges/314c2e19-01ee-49a6-825e-14195b7de050/public_url"
        },
      ],
    },
    {
      category: "Co-curricular Activities",
      icon: <FaTrophy />,
      items: [
        {
          title: "Organiser",
          organization: "Sutra 2.0 - IIT Madras",
          period: "24 Nov 2024",
          description:
            "Organised an offline interative meetup with Prof. Andrew and Ms. Bharathi at NIT Patna.",
        },
        {
          title: "Design Team Head",
          organization: "Kanha House - IIT Madras",
          period: "Aug'23-Aug'24",
          description:
            "Started my journey as a Graphic Designer after joining the design team, and later advanced to become the Team Lead of the Design Department.",
        },
        {
          title: "Designing Lead",
          organization: "Google Developers Group",
          date: "2023 - Present",
          description:
            "Joined GDG as a core team member for the Design Department in 2023 and was later promoted to Design Lead.",
        },
        {
          title: "Secretary",
          organization: "IRIS Photogrpaphy Society - IIT Madras",
          period: "Feb'23 - Present",
          description:
            "Currently serving as the Secretary of IRIS Photography Society. Joined the society in November 2023 as Deputy Secretary and was later promoted to Secretary.",
        },
        {
          title: "Event Coordinator",
          organization: "Paradox'23 - IIT Madras",
          period: "Mar'23",
          description:
            "Organised a sports event named 'The Rollin Thunder' in the fest of IIT Madras in the month of May",
        },
      ],
    },
    // {
    //   category: "Volunteer Work",
    //   icon: <FaHandsHelping />,
    //   items: [
    //     {
    //       title: "demo",
    //       organization: "demo",
    //       period: "time period",
    //       description: "lorem ispum..."
    //     }
    //   ]
    // }
  ];

  return (
    <section id="achievements" className="achievements">
      <h2 className="section-title">Achievements</h2>
      <div className="achievements-container">
        {achievements.map((category, index) => (
          <div
            key={index}
            className="achievement-section animate-on-scroll"
            style={{ "--delay": `${index * 0.2}s` }}
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
                    <p className="period">{item.period || item.date}</p>
                    <p className="description">{item.description}</p>
                    <a href={item.link} className="link" target="_blank" rel="noopener noreferrer">
                      {item.link && "Certificate"}
                    </a>
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
