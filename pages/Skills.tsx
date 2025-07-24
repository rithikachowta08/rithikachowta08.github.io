import Graph from "@/components/Skills/Graph";
import MobileSkills from "@/components/Skills/MobileSkills";

const Skills = () => {
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 70 },
    { name: "JavaScript", level: 80 },
    { name: "TypeScript", level: 80 },
    { name: "NextJS", level: 70 },
    { name: "ReactJS", level: 80 },
    { name: "NodeJS + Express", level: 60 },
    { name: "Python + Flask", level: 50 },
  ];
  return (
    <div className="relative py-12 flex flex-col gap-4 min-h-screen w-[80%] md:w-[70%] self-center items-center justify-center lg:w-[90%] m-auto">
      <h2 className="text-2xl mb-12">What I know:</h2>
      <div className="hidden lg:block">
        <Graph skills={skills} />
      </div>
      <div className="block w-full lg:hidden">
        <MobileSkills skills={skills} />
      </div>
    </div>
  );
};

export default Skills;
