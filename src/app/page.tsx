import Footer from "@/components/Footer";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Services />

      <Footer />
    </div>
  );
};

export default Home;
