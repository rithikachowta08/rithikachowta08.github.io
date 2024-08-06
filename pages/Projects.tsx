import ProjectCard from "@/components/Projects/ProjectCard";

const projects = [
  {
    name: "CloudQuery",
    description:
      "Simple barebones app for finding the weather at your location. You can either allow the browser to detect location or the location can be manually entered.",
    techStack: ["JavaScript", "HTML", "CSS"],
    url: "https://splendid-weather.netlify.app/",
    githubUrl: "https://github.com/rithikachowta08/weather-app",
    screenshot: "/images/weather/weather_3.png",
  },
  {
    name: "Realtime Chat",
    description:
      "Reusable and configurable component for one-on-one chat, built by leveraging Firebase realtime database for storing messages. It provides a chat component that can be configured to use any Firebase app as the backend. The module is published on NPM registry.",
    techStack: ["ReactJS", "Sass", "Redux Saga"],
    githubUrl: "https://github.com/rithikachowta08/react-chat",
    screenshot: "/images/chat/chat_1.png",
    url: "https://qwymgy-5173.csb.app/",
    extraLink: {
      url: "https://www.npmjs.com/package/@rithikachowta08/react-chat",
      text: "View NPM package",
    },
  },
  {
    name: "Hangman Game",
    description:
      "A cute little hangman game with a GUI built using Python tkinter module",
    techStack: ["Python", "Tkinter"],
    url: "",
    githubUrl: "https://github.com/rithikachowta08/python-hangman-game",
    screenshot: "/images/hangman/hangman_1.png",
  },
  {
    name: "GymBuddy",
    description:
      "All in one workout assistant for personalised workout routines, smart instructions and calorie tracker",
    status: "COMING_SOON",
  },
];

function Projects() {
  return (
    <div className="relative py-12 flex flex-col gap-4 min-h-screen w-[80%] md:w-[70%] self-center items-center justify-center lg:w-full lg:px-12 m-auto">
      <h2 className="text-2xl mb-12">Projects:</h2>
      {projects.map((project) => (
        <ProjectCard key={`project_${project.name}`} data={project} />
      ))}
    </div>
  );
}

export default Projects;
