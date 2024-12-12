import React from "react";
import Socials from "../Socials";
import Typewriter from "../TypeWriter";

const Hero = () => {
  const an = [
    "Engenheiro de Computação",
    "Técnico em Informática",
    "Desenvolvedor de Sistemas",
  ];
  return (
    <section
      id="hero"
      className="container mx-auto relative sm:w-full h-svh flex-col justify-center items-center flex gap-10 bg-primary px-10"
    >
      <div className="absolute top-52 flex-col justify-center items-center flex">
        <h3 className="text-center text-zinc-400 text-lg font-medium leading-7">
          Olá, eu sou o...
        </h3>
        <h1 className="text-center text-accent text-2xl font-medium leading-loose">
          Antonio Mendes
        </h1>
      </div>
      <div className="flex-col justify-start items-center flex">
        <Typewriter words={an} />
      </div>
      <Socials
        containerStyles="absolute bottom-20 w-full justify-center items-center gap-4 inline-flex grow-1 basis-0"
        iconStyles="text-3xl"
      />
    </section>
  );
};

export default Hero;
