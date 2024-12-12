"use client";

import Link from "next/link";
import { useState } from "react";

export const menuLinks = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "sobre",
    href: "/#about",
  },
  {
    name: "projetos",
    href: "/#projects",
  },
  {
    name: "services",
    href: "/#services",
  },
  {
    name: "contact",
    href: "/contact",
  },
];
const Nav = () => {
  const [section, setSection] = useState("/");
  return (
    <nav className="flex gap-8 lg:justify-between">
      {menuLinks.map((link, index) => (
        <Link
          href={link.href}
          key={index}
          className={`${
            link.href === section &&
            "text-accent border-b-2 border-dotted border-accent"
          } capitalize font-medium hover:text-accent transition-all`}
          onClick={() => {
            setSection(link.href);
          }}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
