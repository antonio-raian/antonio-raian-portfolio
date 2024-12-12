"use client";
import { FC, useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

interface CarouselProps {
  items: React.ReactNode[]; // Lista de itens (imagens ou texto)
}

const Carousel: FC<CarouselProps> = ({ items }) => {
  const [isMobile, setIsMobile] = useState(false);
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="min-w-full relative py-3">
      <motion.div
        className="flex gap-4"
        initial={{ x: 0 }}
        animate={isMobile ? { x: ["0%", "-200%"] } : { x: ["0%", "-25%"] }}
        transition={{
          ease: "linear",
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        {items.map((item, index) => (
          <div key={index} className="shrink-0">
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Carousel;
