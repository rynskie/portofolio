const Skills = () => {
  const skillCategories = [
    {
      title: "Design",
      skills: ["Figma", "Canva"],
      icon: "🎨"
    },
    {
      title: "Web Development",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      icon: "💻"
    },
    {
      title: "Marketing",
      skills: ["Affiliate Marketing", "Product Research"],
      icon: "📈"
    },
    {
      title: "Creative",
      skills: ["Video Editing", "Prompting"],
      icon: "✨"
    }
  ];

  return (
    <section id="skills" className="section bg-cream">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-beige p-6 rounded shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
              style={{ marginTop: index % 2 === 0 ? '0' : '2rem' }} // slight variation
            >
              <div className="text-3xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="text-blue">• {skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;