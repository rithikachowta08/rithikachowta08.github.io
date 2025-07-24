import ProjectCard from "@/components/Projects/ProjectCard";

const projects = [
  {
    name: "@rithikachowta08/react-chat",
    description: "Reusable and configurable component for realtime chat, built using Firebase RTDB. Published to npm registry.",
    techStack: ["ReactJS", "Sass", "Redux Saga"],
    thumbnail: "/images/chat.png",
    url: "https://neon-horse-6efae9.netlify.app/",
    extraLink: {
      url: "https://www.npmjs.com/package/@rithikachowta08/react-chat",
      text: "View NPM package",
    },
  },
  {
    name: "Tekagogo",
    description: "Real-time platform connecting dental clinics with on-demand equipment repair technicians across the US.",
    techStack: ["ReactJS", "Sass", "Redux Saga"],
    whiteBg: true,
    thumbnail: "/images/tekagogo.webp",
    url: "https://tekagogo.com/",
  },
  {
    name: "GeoGebra",
    description: "Dynamic math platform used worldwide for visualizing and exploring geometry, algebra and calculus interactively.",
    thumbnail: "/images/geogebra.png",
    whiteBg: true,
    techStack: ["NextJS", "TailwindCSS", "TypeScript"],
    url: "https://www.geogebra.org/",
  },
  {
    name: "CloudQuery",
    description: "Simple VanillaJS app for finding the weather at your location.",
    thumbnail: "/images/cloudquery.png",
    techStack: ["JavaScript", "HTML", "CSS"],
    url: "https://splendid-weather.netlify.app/",
  },
];

function Projects() {
  return (
    <div className="relative py-12 flex flex-col gap-4 min-h-screen w-[80%] md:w-[70%] self-center items-center justify-center lg:w-[90%] m-auto">
      <h2 className="text-2xl mb-12">Projects:</h2>
      <div className="grid grid-cols-2 gap-16 lg:w-2/3">
        {projects.map((project) => (
          <ProjectCard key={`project_${project.name}`} data={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
