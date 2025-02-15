import "./Experience.css";

function Experience() {
  const experiences = [
    {
      title: "Brand Ambassador",
      company: "Go-Dutch",
      period: "Jul'21 - Aug'21",
      description: "Generated Customers for their application",
    },
    {
      title: "Freelance Graphic Designer",
      company: " Self ",
      period: "2024 - Present",
      description:
        "Designed impactful visuals as a freelance graphic designer for diverse clients.",
    },
    {
      title: "Frontend React Developer",
      company: "Slate - IIT Madras",
      period: "2025 - Present",
      description:
        "Developing User friendly UI for the application using React.js",
    },
  ];

  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="timeline-item animate-on-scroll"
            style={{ "--delay": `${index * 0.2}s` }}
          >
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p className="period">{exp.period}</p>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
