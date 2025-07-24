import Timeline from "@/components/Work/Timeline";

const Work = () => {
  return (
    <div className="relative py-12 flex flex-col gap-4 min-h-screen w-[80%] md:w-[70%] self-center items-center -translate-y-16 lg:-translate-y-8 justify-center lg:w-[90%] m-auto">
      <h2 className="text-2xl mb-12">Where I've worked:</h2>
      <Timeline />
    </div>
  );
};

export default Work;
