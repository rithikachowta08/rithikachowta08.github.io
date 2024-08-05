"use client";
import About from "@/pages/About";
import Home from "@/pages/Home";
import Contact from "@/pages/Contact";
import Work from "@/pages/Work";
import Skills from "@/pages/Skills";
import ReactFullpage from "@fullpage/react-fullpage";

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
    <main className="min-h-screen flex flex-col">
      <ReactFullpage
        credits={{ enabled: false }}
        scrollingSpeed={900}
        fitToSection
        fadingEffect
        render={() => (
          <ReactFullpage.Wrapper>
            {sections.map((section, idx) => (
              <div key={idx} id={section.id} className="section">
                {section.component}
              </div>
            ))}
          </ReactFullpage.Wrapper>
        )}
      />
    </main>
  );
};

export default Index;
