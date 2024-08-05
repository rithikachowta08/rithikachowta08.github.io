import "./Graph.scss";
import { useEffect } from "react";

const HEIGHT_MAP = {
  10: "h-[100px]",
  20: "h-[150px]",
  30: "h-[200px]",
  40: "h-[250px]",
  50: "h-[300px]",
  60: "h-[350px]",
  70: "h-[400px]",
  80: "h-[450px]",
  90: "h-[500px]",
  100: "h-[550px]",
};

const Graph = ({ skills }) => {
  useEffect(() => {
    const graph = document.querySelector(".graph") as Element;
    const barElements = graph.querySelectorAll(".bar");
    if (graph) {
      const observer = new IntersectionObserver((entries) => {
        Array.from(barElements).forEach((barElement) =>
          barElement.classList.toggle("animate", entries[0].isIntersecting)
        );
      });
      observer.observe(graph);
    }
  }, []);
  return (
    <div className="graph">
      <div className="y-axis">
        <div className="triangle-top"></div>
      </div>
      <div className="x-axis">
        <div className="triangle-right"></div>
      </div>
      <div className="absolute bottom-0 left-8 flex gap-8 items-end">
        {skills.map(({ name, level }) => (
          <div
            key={`skill_${name}`}
            className="flex flex-col items-center gap-4"
          >
            <span>{name}</span>
            <div className={`bar w-4 ${HEIGHT_MAP[level]}`}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Graph;
