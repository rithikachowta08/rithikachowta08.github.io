import About from "@/pages/About";
import Home from "@/pages/Home";

export default function Main() {
  return (
    <main className="min-h-screen flex flex-col">
      <img
        style={{ display: "none" }}
        fetchPriority="high"
        src="/images/bg.webp"
        alt="Bg image"
      ></img>
      <Home />
      <About />
    </main>
  );
}
