import Timeline from "@/components/Work/Timeline";
import { DOMElement, useEffect } from "react";

const Work = () => {
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
    <div className="relative py-12 flex flex-col gap-4 min-h-screen w-[80%] md:w-[70%] self-center items-center justify-center lg:w-full lg:px-12 m-auto">
      <h2 className="text-2xl mb-12">Where I've been:</h2>
      <Timeline />
    </div>
  );
};

export default Work;
