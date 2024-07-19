import Description from "@/components/About/Description";

type About = {};

const About = () => {
  return (
    <div className="py-12 flex flex-col gap-4 min-h-screen w-[80%] md:w-[70%] self-center justify-center lg:w-full lg:px-12 m-auto">
      <Description />
    </div>
  );
};

export default About;
