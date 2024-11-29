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
      className="relative w-full pt-7 pb-12 flex-col justify-start items-center gap-5 inline-flex"
    >
      <MyLabel text="Projetos" />
      <div className="flex flex-wrap flex-col gap-6 w-full px-5">
        {projects.map((project, index) => (
          <CardProjects key={index} project={project} />
        ))}
      </div>
      <div className="w-full overflow-x-hidden px-7">
        <MyLabel text="Tecnologias" className="text-lg" cursor=" " />
        <Carousel items={skills.map((item) => item.component)} />
      </div>
    </section>
  );
};

export default Projects;
