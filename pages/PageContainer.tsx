"use client";
import About from "@/pages/About";
import Home from "@/pages/Home";
import Contact from "@/pages/Contact";
import Work from "@/pages/Work";
import Skills from "@/pages/Skills";
import Projects from "@/pages/Projects";
import ReactFullpage from "@fullpage/react-fullpage";
import ArrowUpIcon from "@/public/icons/arrow-up.svg";

const sections = [
  <Home />,
  <About />,
  <Work />,
  <Skills />,
  <Projects />,
  <Contact />,
];

const Index = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <ReactFullpage
        anchors={["home", "about", "work", "skills", "projects", "contact"]}
        credits={{ enabled: false }}
        scrollingSpeed={900}
        fitToSection
        fadingEffect
        slideSelector=".fullpage-slide"
        render={(fu) => (
          <ReactFullpage.Wrapper>
            {sections.map((section, idx) => (
              <div key={idx} className="section">
                {section}
                {idx !== 0 ? (
                  <div
                    className="hidden absolute bottom-4 right-4 border border-white rounded-full p-2 lg:block cursor-pointer"
                    onClick={() => window.fullpage_api.moveTo("home")}
                  >
                    <ArrowUpIcon />
                  </div>
                ) : null}
              </div>
            ))}
          </ReactFullpage.Wrapper>
        )}
      />
    </main>
  );
};

export default Index;
