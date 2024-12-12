"use client";

import { usePathname } from "next/navigation";
import { menuLinks } from "./Nav";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
  SheetDescription,
} from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import HireMe from "./HireMe";
import Logo from "./Logo";
import { useState } from "react";

const MobileNav = () => {
  const [section, setSection] = useState("/");
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-2xl text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-4 justify-start items-center">
        <SheetTitle className="w-full px-4 pb-8">
          <Logo />
        </SheetTitle>
        <SheetDescription> Menu </SheetDescription>
        <nav className="flex flex-col justify-center items-center gap-8">
          {menuLinks.map((link, index) => (
            <Link href={link.href} key={index}>
              <SheetClose
                key={index}
                className={`${
                  link.href === section &&
                  "text-accent border-b-2 border-dotted border-accent"
                } capitalize text-xl hover:text-accent transition-all`}
                onClick={() => {
                  setSection(link.href);
                }}
              >
                {link.name}
              </SheetClose>
            </Link>
          ))}
        </nav>
        <HireMe />
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
