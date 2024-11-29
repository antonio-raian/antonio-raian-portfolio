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
} from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import HireMe from "./HireMe";
import Logo from "./Logo";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-2xl text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-4">
        <SheetTitle className="px-4 pb-8">
          <Logo />
        </SheetTitle>
        <nav className="flex flex-col justify-center items-center gap-8">
          {menuLinks.map((link, index) => (
            <Link href={link.href} key={index}>
              <SheetClose
                key={index}
                className={`${
                  link.href === pathname &&
                  "text-accent border-b-2 border-dotted border-accent"
                } capitalize text-xl hover:text-accent transition-all`}
              >
                {link.name}
              </SheetClose>
            </Link>
          ))}
          <HireMe />
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
