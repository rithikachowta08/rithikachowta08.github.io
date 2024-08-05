import Timeline from "@/components/Work/Timeline";

const Work = () => {
  return (
    <div className="relative py-12 flex flex-col gap-4 min-h-screen w-[80%] md:w-[70%] self-center items-center justify-center lg:w-full lg:px-12 m-auto">
      <h2 className="text-2xl mb-12">Where I've been:</h2>
      <Timeline />
    </div>
  );
};

export default Work;
