import "./Home.scss";
import Link from "next/link";

const Intro = () => {
  const diff = Date.now() - new Date("2018-08-15T12:00:00");
  const years = diff / (1000 * 60 * 60 * 24 * 365.25); // 365.25 accounts for leap years
  const roundedYears = Math.floor(years);
  return (
    <div className="w-full">
      <h2 className={`animated-text text-4xl mb-8 lg:text-6xl lg:mb-4 w-fit`}>Hi! I&apos;m Rithika</h2>
      <p className="text-xl leading-10 lg:text-2xl lg:leading-10">
        A frontend engineer with over {roundedYears} years of experience. <br></br>
        <Link className={`link hover-styled link-invert`} href="" onClick={() => window.fullpage_api.moveTo("about")}>
          Read on
        </Link>{" "}
        to know more about me 👩🏻‍💻
      </p>
    </div>
  );
};

export default Intro;
