import React from "react";

import { Button } from "../ui/button";
import { FiDownload } from "react-icons/fi";
import Stats from "../Stats";
import Photo from "../Photo";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full px-10 pt-7 pb-12 mb-10 bg-zinc-900 flex-col justify-start items-center inline-flex gap-10"
    >
      {/* Detalhe */}
      <div className="absolute top-0 left-0 w-full min-w-500 h-10 origin-top-left rotate-[-5deg] bg-zinc-900 z-10" />

      {/* Title */}
      <div className="text-center">
        <span className="text-zinc-100 text-xl font-semibold">Sobre </span>
        <span className="animate-blink text-accent text-xl font-medium">|</span>
      </div>
      {/* Image */}
      <div className="w-full flex-col justify-center items-center flex z-20">
        <Photo />
      </div>
      {/* Text */}
      <div className="text-center text-xl font-light leading-normal flex flex-col gap-10">
        <span>
          Me chamo
          <span className="font-bold underline  decoration-accent decoration-2 underline-offset-4">
            Antonio
          </span>
          , engenheiro, baiano e apaixonado por quebra-cabeças.
        </span>
        <span>
          Finalizei o curso de{" "}
          <span className="font-bold underline  decoration-accent decoration-2 underline-offset-4">
            Engenharia de Computação
          </span>{" "}
          em 2024, mas minha jornada na programação começou bem antes, ainda na
          era do Ubuntu 11.10 😆.
        </span>
        <span>
          Desde então, participei de projetos voltados para experiência do
          usuário (
          <span className="font-bold underline  decoration-accent decoration-2 underline-offset-4">
            Front-End
          </span>
          ) e também atuei nos bastidores, cuidando do{" "}
          <span className="font-bold underline  decoration-accent decoration-2 underline-offset-4">
            Back-End
          </span>{" "}
          de outros. Atualmente, estou explorando desafios que exigem
          habilidades em ambas as áreas, mergulhando no universo{" "}
          <span className="font-bold underline  decoration-accent decoration-2 underline-offset-4">
            FullStack
          </span>
          .
        </span>
        <span>
          Na minha experiência mais recente, atuei como desenvolvedor referência
          na migração de um sistema de gestão para clínicas de saúde. Essa
          experiência fortaleceu minhas habilidades na{" "}
          <span className="font-bold underline  decoration-accent decoration-2 underline-offset-4">
            gestão de projetos
          </span>{" "}
          e{" "}
          <span className="font-bold underline  decoration-accent decoration-2 underline-offset-4">
            liderança de equipes
          </span>
          . Além disso, contribuí diretamente com o cliente na elaboração da
          arquitetura do novo sistema, garantindo alinhamento com os objetivos e
          necessidades do projeto.
        </span>
      </div>
      <Stats
        stats={[
          {
            name: "Anos de Experiência",
            value: new Date().getFullYear() - 2019,
            prefix: "+",
          },
        ]}
      />
      {/* CV */}
      <div className="text-center text-lg font-light leading-normal flex flex-col gap-5">
        <span className=" text-zinc-400">
          Para mais informações sobre mim, clique no botão abaixo e baixe meu
          currículo.
        </span>
        <Button
          variant="outline"
          size={"lg"}
          className="uppercase flex items-center gap-2"
        >
          <span>Download CV</span>
          <FiDownload className="text-xl" />
        </Button>
      </div>

      <div className="absolute -bottom-10 -left-1 w-full bg-zinc-900 min-w-500 h-10 origin-top-left rotate-[-5deg] z-10" />
    </section>
  );
};

export default About;
