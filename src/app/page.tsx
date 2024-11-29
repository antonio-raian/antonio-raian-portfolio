import About from "@/components/pages/About";
import Hero from "@/components/pages/Hero";
import Projects from "@/components/pages/Projects";
import Services from "@/components/pages/Services";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Services />
    </div>
  );
};

export default Home;
