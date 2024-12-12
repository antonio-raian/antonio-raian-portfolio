import projects from "@/mocks/works";
import React from "react";
import { CardProjects } from "../CardProjects";
import Carousel from "../Carousel";
import { skills } from "@/mocks/professional";
import MyLabel from "../ui/my-page-label";
import Stats from "../Stats";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative w-full pt-7 pb-12 flex-col justify-start items-center gap-5 inline-flex before:absolute before:top-0 before:left-0 before:bg-primary before:transform before:origin-top-left before:rotate-[-5deg] lg:before:rotate-[-3deg] before:w-full before:h-60 before:z-10"
    >
      <MyLabel text="Projetos" />
      <div className="container flex flex-wrap gap-6 w-full px-5 z-20 justify-center">
        {projects.map((project, index) => (
          <CardProjects key={index} project={project} />
        ))}
      </div>
      <div className="container w-full overflow-x-hidden px-7 ">
        <MyLabel text="Tecnologias" className="text-lg" cursor=" " />
        <Carousel items={skills.map((item) => item.component)} />
      </div>
    </section>
  );
};

export default Projects;
