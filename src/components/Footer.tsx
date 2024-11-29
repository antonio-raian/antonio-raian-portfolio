import React from "react";
import { FiAward } from "react-icons/fi";
import { Button } from "./ui/button";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="bottom-0 w-full px-7 py-5 bg-gray-300 flex-col justify-end items-center gap-5 inline-flex">
      <div className="flex-col justify-end gap-3 inline-flex">
        <span className=" text-primary text-md font-semibold">
          Vamos Conversar?
        </span>
        <span className=" text-primary text-xs font-medium">
          Tem alguma ideia que gostaria de tirar do papel? O que eu poderia
          fazer por você hoje?
        </span>
      </div>
      <Button className="bg-gray-400 gap-2.5 inline-flex text-primary">
        <FiAward className="text-lg" />
        <div className="text-center text-xs font-semibold leading-none tracking-wider">
          Fale Comigo!
        </div>
      </Button>
      <Socials
        containerStyles="flex justify-center items-center text-primary gap-4"
        iconStyles="text-3xl"
      />
      <span className="text-center text-primary text-xs font-semibold leading-none">
        © {new Date().getFullYear()} - Todos direitos reservados
        <br />
        Desenvolvido com 💚 por @antonio-raian
      </span>
    </footer>
  );
};

export default Footer;
