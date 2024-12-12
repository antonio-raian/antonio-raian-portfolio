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
      <div className="container flex flex-wrap gap-6 w-full px-5 justify-center">
        {services.map((service, index) => (
          <CardService key={index} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
