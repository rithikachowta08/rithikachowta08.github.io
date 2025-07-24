import Logo from "@/components/Home/Logo";
import Navigation from "@/components/Home/Navigation";
import Intro from "@/components/Home/Intro";
import ProfileImage from "@/components/Home/ProfileImage";

const Home = () => {
  return (
    <div className="py-12 flex flex-col gap-4 min-h-screen w-[80%] md:w-[70%] self-center lg:w-[90%] m-auto">
      <header className="flex gap-8 lg:justify-between">
        <Logo />
        <Navigation />
      </header>
      <section className="flex flex-col flex-grow items-center gap-4 justify-evenly lg:flex-row lg:justify-between lg:gap-8 xl:gap-4">
        <Intro />
        <ProfileImage />
      </section>
    </div>
  );
};

export default Home;
