"use client";
import { iProject } from "@/mocks/works";
import Image from "next/image";
import React from "react";
import Badge from "./ui/badge";
import { Button } from "./ui/button";
import { FaGithubAlt } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { motion } from "framer-motion";

import Link from "next/link";
import { iServices } from "@/mocks/professional";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      className="w-full bg-zinc-900 rounded-xl flex-col justify-start items-center inline-flex overflow-hidden shadow-md shadow-gray-400/20 max-w-96 h-full"
    >
      {children}
    </motion.div>
  );
};

const CardProjects = ({ project }: { project: iProject }) => {
  return (
    <Link href={project.live} target="_blank">
      <Card>
        <Image
          className="h-28 object-left-top object-cover"
          src={project.image}
          width={400}
          height={100}
          alt={""}
        />
        <div className="px-5 py-3.5 flex-col justify-center items-center gap-5 flex h-full">
          <div className="font-semibold text-center text-white flex-col justify-center items-center gap-1 flex">
            <div className="text-xl leading-normal">{project.title}</div>
            <div className="text-xs leading-tight line-clamp-2">
              {project.description}
            </div>
          </div>
          <div className="py-2 justify-center items-center gap-2 inline-flex">
            {project.stack.map((item, index) => (
              <Badge text={item.name} key={index} />
            ))}
          </div>
          <div className="py-2.5 justify-center items-center gap-3 inline-flex">
            <Link href={project.github} target="_blank">
              <Button
                size="sm"
                className="px-5 py-2.5 bg-gray-400 rounded-full justify-center items-center gap-2.5 inline-flex text-primary text-sm font-semibold"
              >
                <FaGithubAlt className="w-4 h-4" />
                Código
              </Button>
            </Link>
            <Link href={project.live} target="_blank">
              <Button
                size="sm"
                className="px-5 py-2.5 bg-gray-400 rounded-full justify-center items-center gap-2.5 inline-flex text-primary text-sm font-semibold"
              >
                <TbWorld className="w-4 h-4" />
                Prévia
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </Link>
  );
};

const CardService = ({ service }: { service: iServices }) => {
  return (
    <Link href={service.href}>
      <Card>
        <div className="w-full px-2.5 py-5 flex-col justify-center flex h-full">
          <div className="px-5 py-2.5 justify-start items-center inline-flex">
            {service.component}
          </div>
          <div className="flex flex-col gap-5 px-5 py-2.5">
            <div className="text-2xl font-semibold leading-normal">
              {service.title}
            </div>
            <div className="text-sm font-medium leading-tight text-zinc-400">
              {service.description}
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export { CardProjects, CardService };
