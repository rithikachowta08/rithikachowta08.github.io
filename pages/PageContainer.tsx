"use client";
import About from "@/pages/About";
import Home from "@/pages/Home";
import Contact from "@/pages/Contact";
import Work from "@/pages/Work";
import Skills from "@/pages/Skills";

const sections = [
  {
    component: <Home />,
    id: "home",
  },
  {
    component: <About />,
    id: "about",
  },
  {
    component: <Work />,
    id: "work",
  },
  {
    component: <Skills />,
    id: "skills",
  },
  {
    component: <Contact />,
    id: "contact",
  },
];

const Index = () => {
  return (
    <main className="min-h-screen flex flex-col overflow-x-hidden">
      {sections.map((section, idx) => (
        <article key={idx} className="relative" id={section.id}>
          {Array(80)
            .fill(null)
            .map((_, idx) => (
              <div key={`firefly_${idx}`} className="firefly"></div>
            ))}
          {section.component}
        </article>
      ))}
    </main>
  );
};

export default Index;
