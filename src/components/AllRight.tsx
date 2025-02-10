import React from "react";
import Socials from "./Socials";

const AllRight = () => {
  return (
    <div className="bottom-0 w-full px-7 py-5 bg-gray-300 flex-col justify-between items-center gap-6 inline-flex">
      <Socials
        containerStyles="flex justify-center items-center text-primary gap-4"
        iconStyles="text-3xl"
      />
      <div className="flex justify-center items-center gap-3 flex-col md:flex-row">
        <span className="text-center text-primary text-xs font-semibold leading-none">
          © {new Date().getFullYear()} - Todos direitos reservados.
        </span>
        <span className="text-center text-primary text-xs font-semibold leading-none">
          Desenvolvido com 💜 por @antonio-raian
        </span>
      </div>
    </div>
  );
};

export default AllRight;
