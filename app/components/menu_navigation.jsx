"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Photo from "../../public/android-chrome-512x512.png";

const navigation = [
  // { name: 'Hero', href: '#' },
  { name: "Expertize", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Resume", href: "/#resume" },
  { name: "Contact", href: "/#contact" },
];

export default function MenuNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Mendes</span>
            <span className="flex font-mono font-bold text-2xl text-center items-center justify-center">
              <span className="text-5xl text-purple-500 -mt-1">&lt;</span>
              AntonioMendes
              <span className="text-2xl text-purple-500">_</span>
            </span>
            {/* <Image className="h-30 w-auto" src={Photo} alt="" /> */}
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            {/* <Bars3Icon className="h-6 w-6" aria-hidden="true" /> */}
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 nav-item">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-xl font-semibold leading-6 font-mono lowercase"
            >
              <span>\\ {item.name}</span>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
