const projects = [
  {
    title: "Media Sosial App",
    image: "/project1.jpg",
    desc: "Aplikasi media sosial sederhana dengan login, posting & komentar",
    link: "https://github.com/rynskie/web-socket-realtime-express.git",
  },
  {
    title: "Marketplace App",
    image: "/project3.jpg",
    desc: "Aplikasi marketplace sederhana untuk menampilkan produk dan melakukan pemesanan secara online",
    link: "https://github.com/rynskie/be-marketplace-R.git",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-white px-6 md:px-20 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center">
          My Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-700 mb-2">{project.desc}</p>
                <a
                  href={project.link}
                  className="text-blue-500 hover:underline text-sm"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;