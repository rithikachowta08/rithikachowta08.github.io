import "./Timeline.scss";
import { useEffect } from "react";

const workHistory = [
  { name: "YML", title: "Software Engineer", year: "2018-19" },
  { name: "Locus.sh", title: "Senior Software Engineer", year: "2019-22" },
  { name: "Byjus'", title: "Senior Software Engineer", year: "2022-Present" },
];

const Timeline = () => {
  useEffect(() => {
    const timeline = document.querySelector(".timeline") as Element;
    const timelineElements = document.querySelectorAll(".timeline-element");
    const observer = new IntersectionObserver((entries) => {
      timeline.classList.toggle("animate", entries[0].isIntersecting);
      Array.from(timelineElements).forEach((timelineElement) =>
        timelineElement.classList.toggle("animate", entries[0].isIntersecting)
      );
    });
    observer.observe(timeline);
  }, []);
  return (
    <ol className="timeline animate m-0 p-0">
      {workHistory.map((item) => (
        <li className="timeline-element m-0 p-0" key={item.name}>
          <span>
            <div className="flex flex-col text-sm">
              <div>{item.name}</div>
              <div>{item.title}</div>
              <div>{item.year}</div>
            </div>
          </span>
        </li>
      ))}
    </ol>
  );
};

export default Timeline;
