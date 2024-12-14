"use client";
import React from "react";
import { FiAward } from "react-icons/fi";
import { Button } from "./ui/button";
import Socials from "./Socials";
import { redirect, useRouter } from "next/navigation";
import AllRight from "./AllRight";

const Footer = () => {
  const router = useRouter();
  return (
    <footer className="bottom-0 w-full px-7 py-5 bg-gray-300 flex justify-center items-end">
      <div className=" container flex-col items-center gap-3 inline-flex">
        <div className="flex-col justify-end gap-3 inline-flex">
          <span className=" text-primary text-md font-semibold">
            Vamos Conversar?
          </span>
          <span className=" text-primary text-xs font-medium">
            Tem alguma ideia que gostaria de tirar do papel? O que eu poderia
            fazer por você hoje?
          </span>
        </div>
        <Button
          className="bg-gray-400 gap-2.5 inline-flex text-primary"
          onClick={() => {
            router.push("/contact");
          }}
        >
          <FiAward className="text-lg" />
          <div className="text-center text-xs font-semibold leading-none tracking-wider">
            Fale Comigo!
          </div>
        </Button>
        <AllRight />
      </div>
    </footer>
  );
};

export default Footer;
