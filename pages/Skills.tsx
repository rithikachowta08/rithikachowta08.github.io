import Graph from "@/components/Skills/Graph";

const Skills = () => {
  return (
    <div className="relative py-12 flex flex-col gap-4 min-h-screen w-[80%] md:w-[70%] self-center items-center justify-center lg:w-full lg:px-12 m-auto">
      <h2 className="text-2xl mb-12">What I know:</h2>
      <Graph
        skills={[
          { name: "HTML", level: 90 },
          { name: "CSS", level: 70 },
          { name: "JavaScript", level: 80 },
          { name: "NextJS", level: 70 },
          { name: "ReactJS", level: 80 },
          { name: "NodeJS + Express", level: 50 },
          { name: "Python + Flask", level: 60 },
          { name: "MongoDB", level: 50 },
        ]}
      />
    </div>
  );
};

export default Skills;
