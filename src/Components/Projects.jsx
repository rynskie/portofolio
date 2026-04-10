const projects = [
  {
    title: "Social Media App",
    image: "/project1.jpg",
    desc: "A simple social media application with login, posting, and commenting features.",
    category: "Web Development"
  },
  {
    title: "Marketplace App",
    image: "/project3.jpg",
    desc: "An online marketplace for product display and ordering.",
    category: "Web Development"
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="section bg-cream">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-beige rounded overflow-hidden shadow-md hover:shadow-lg transition transform hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-blue text-sm font-semibold uppercase">{project.category}</span>
                <h3 className="text-xl font-bold mt-2 mb-2">{project.title}</h3>
                <p className="text-lg">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;