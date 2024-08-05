import "./MobileSkills.scss";
import { useEffect } from "react";

const WIDTH_MAP = {
  10: "w-[10%]",
  20: "w-[20%]",
  30: "w-[30%]",
  40: "w-[40%]",
  50: "w-[50%]",
  60: "w-[60%]",
  70: "w-[70%]",
  80: "w-[80%]",
  90: "w-[90%]",
  100: "w-[100%]",
};

const MobileSkills = ({ skills }) => {
  useEffect(() => {
    const graph = document.querySelector(".mobile-skills") as Element;
    const barElements = graph.querySelectorAll(".progress-bar");
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
    <div className="mobile-skills flex flex-col gap-8">
      {skills.map(({ name, level }) => (
        <div key={`skill_${name}`} className="flex gap-4 items-center">
          <div className="w-24 shrink-0">{name}</div>
          <div className={`progress-bar h-4 ${WIDTH_MAP[level]}`}></div>
        </div>
      ))}
    </div>
  );
};

export default MobileSkills;
