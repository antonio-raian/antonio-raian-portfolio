import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const HireMe = () => {
  return (
    <Link href="#contact">
      <Button>Entre em contato!</Button>
    </Link>
  );
};

export default HireMe;
