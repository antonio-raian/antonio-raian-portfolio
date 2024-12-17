import React from "react";

import { Button } from "../ui/button";
import { FiDownload } from "react-icons/fi";
import Stats from "../Stats";
import Photo from "../Photo";
import MyLabel from "../ui/my-page-label";
import Link from "next/link";

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-zinc-900 flex justify-start items-center pb-10 before:absolute before:top-0 before:left-0 before:bg-inherit before:transform before:origin-top-left before:rotate-[-5deg] lg:before:rotate-[-3deg] before:w-full before:h-60 before:z-10"
    >
      <div className="z-20 container mx-auto justify-start items-center flex-col inline-flex gap-10 w-full px-10 pt-7 pb-12">
        {/* Title */}
        <MyLabel text="Sobre" />
        {/* Image */}
        <div className="w-full flex-col justify-center items-center flex">
          <Photo />
        </div>
        {/* Text */}
        <div className="text-center text-xl font-light leading-normal flex flex-col gap-10">
          <span>
            Me chamo{" "}
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
            em 2024, mas minha jornada na programação começou bem antes, ainda
            na era do Ubuntu 11.10 😆.
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
            Na minha experiência mais recente, atuei como desenvolvedor
            referência na migração de um sistema de gestão para clínicas de
            saúde. Essa experiência fortaleceu minhas habilidades na{" "}
            <span className="font-bold underline  decoration-accent decoration-2 underline-offset-4">
              gestão de projetos
            </span>{" "}
            e{" "}
            <span className="font-bold underline  decoration-accent decoration-2 underline-offset-4">
              liderança de equipes
            </span>
            . Além disso, contribuí diretamente com o cliente na elaboração da
            arquitetura do novo sistema, garantindo alinhamento com os objetivos
            e necessidades do projeto.
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

          <Link
            href="https://drive.google.com/file/d/1p3iZzNL8t65-s5uXcsjm8V1i_AEDjfPn/view?usp=sharing"
            target="_blank"
          >
            <Button
              variant="outline"
              size={"lg"}
              className="uppercase flex items-center gap-2 w-full"
            >
              <span>Download Currículo</span>
              <FiDownload className="text-xl" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
