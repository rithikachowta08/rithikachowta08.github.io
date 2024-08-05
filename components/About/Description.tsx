import "./Description.scss";
import LogicalIcon from "@/public/icons/logical.svg";
import DetailIcon from "@/public/icons/detail.svg";
import InnovativeIcon from "@/public/icons/innovative.svg";

function Description() {
  return (
    <>
      <h2
        className={`relative pl-5 before:content-[''] before:h-full before:w-1 before:absolute before:left-0 before:bg-white text-2xl text-terminal-green mb-10`}
      >
        Passionate and self-driven senior software engineer with experience
        across multiple stacks, sound knowledge of web performance,
        optimization, modern frameworks and accessibility.
      </h2>
      <p>
        I am a CSE graduate from the batch of 2014-18. I started out as a
        frontend dev working with ReactJS and Redux. Over the years, I&apos;ve
        worked with multiple technologies including{" "}
        <strong>NextJS, NodeJS, Flask, MongoDB and GoLang</strong>. My strength
        lies in frontend with over 5 years experience, followed by backend
        experience of 1 year 🎯.
      </p>
      <p>
        I have also worked on integrations and deployments of cutting edge LLMs
        like <strong>GPT-4o, Gemini and Phi-3</strong>, which was a new and
        explorative domain for me 🧠. I have an obsessive need for perfection
        and I thoroughly enjoy discovering new tech and its challenges.
        Surmounting those challenges often yields valuable insights that I can
        apply in more than one domain.
      </p>
      <p>
        Outside of work, I love to spend my time baking sweet treats 🍰, both
        for hoomans and for my pup 🐶. I also love fitness and am a
        self-confessed health nut 🏋🏻‍♀️. Painting 🎨 and reading 📖 are 2 more of
        my interests that I find joy in whenever I can 🌈.
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
