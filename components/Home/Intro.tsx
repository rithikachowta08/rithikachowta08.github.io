import "../styles.scss";
import Link from "next/link";

const Intro = () => {
  return (
    <div className="w-full">
      <h2 className={`animated-text text-4xl mb-8 lg:text-6xl lg:mb-4 w-fit`}>
        Hi! I&apos;m Rithika
      </h2>
      <p className="text-xl leading-10 lg:text-2xl lg:leading-10">
        A full stack developer with over 5 years experience. Tech is what I do
        best. <br></br>
        <Link className={`link link-invert`} href="#about">
          Read on
        </Link>{" "}
        to know more about me 👩🏻‍💻
      </p>
    </div>
  );
};

export default Intro;
