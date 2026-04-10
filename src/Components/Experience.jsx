const Experience = () => {
  const experiences = [
    {
      title: "Internship - Affiliate Marketing",
      period: "2024",
      description: [
        "Learned affiliate marketing strategies",
        "Conducted product research",
        "Created video content for marketing",
        "Helped redesign company website"
      ]
    },
    {
      title: "Paskibra Organization",
      period: "2022 - Present",
      description: [
        "Developed teamwork and leadership skills",
        "Maintained discipline in activities",
        "Participated in various competitions",
        "Organized school events"
      ]
    }
  ];

  return (
    <section id="experience" className="section bg-beige">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-cream p-6 rounded shadow-md">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">{exp.title}</h3>
                <span className="text-blue font-semibold">{exp.period}</span>
              </div>
              <ul className="space-y-2">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="text-lg">• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;