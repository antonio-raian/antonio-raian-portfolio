import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import Logo from "./Logo";
import HireMe from "./HireMe";

const Header = () => {
  return (
    <header className="flex w-full h-20 shadow-zinc-750 shadow-md bg-primary/95 text-white text-lg font-bold z-50 fixed justify-center">
      <div className="w-full max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Logo />
        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <Nav />
          <HireMe />
        </div>

        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
