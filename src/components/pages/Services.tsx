import React from "react";
import MyLabel from "../ui/my-page-label";
import { services } from "@/mocks/professional";
import { CardService } from "../CardProjects";

const Services = () => {
  return (
    <section
      id="services"
      className="relative w-full pt-3 pb-12 flex-col justify-start items-center gap-5 inline-flex"
    >
      <MyLabel text="Serviços" />
      <div className="flex flex-wrap flex-col gap-6 max-w-[90vw]">
        {services.map((service, index) => (
          <CardService key={index} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
