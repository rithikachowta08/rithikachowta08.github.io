import "./Description.scss";
import LogicalIcon from "@/public/icons/logical.svg";
import DetailIcon from "@/public/icons/detail.svg";
import InnovativeIcon from "@/public/icons/innovative.svg";

function Description() {
  return (
    <>
      <h2 className={`relative pl-5 before:content-[''] before:h-full before:w-1 before:absolute before:left-0 before:bg-white text-2xl text-terminal-green mb-10`}>
        Passionate and self-driven senior software engineer with experience across multiple stacks, sound knowledge of web performance, optimization, modern frameworks and
        accessibility.
      </h2>
      <p>
        I am a CSE graduate from the batch of 2014-18. I started out as a frontend dev working with ReactJS and Redux. Over the years, I&apos;ve worked with multiple technologies
        including <strong>NextJS, NodeJS, Python and MongoDB</strong>. My strength lies in frontend with over 7 years of experience 🎯
      </p>
      <p>
        Thoroughout my stints at YML, Locus and Byjus', I have worked on a wide range of products and dashboards such as live tracking-enabled order management interfaces,
        interactive AI chatbots, GSAP-powered mathematical animations and full-page scrolling flashcard websites. I have an obsessive need for perfection and I thoroughly enjoy
        exploring new tech 🧠
      </p>
      <p>
        Outside of work, I love to spend my time baking sweet treats 🍰. I also love fitness and am a self-confessed health nut 🏋🏻‍♀️. Painting 🎨 and reading 📖 are 2 more of my
        interests that I find joy in whenever I can 🌈.
      </p>
      <div className="hidden justify-evenly mt-12 lg:flex">
        <div className={`illustration flex flex-col items-center gap-4`}>
          <LogicalIcon />
          <div>Analytical thinker</div>
        </div>
        <div className={`illustration flex flex-col items-center gap-4`}>
          <DetailIcon />
          <div>Attention to detail</div>
        </div>
        <div className={`illustration flex flex-col items-center gap-4`}>
          <InnovativeIcon />
          <div>Strategic innovator</div>
        </div>
      </div>
    </>
  );
}

export default Description;
