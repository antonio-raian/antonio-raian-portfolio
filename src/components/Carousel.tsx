"use client";
import { FC, useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

interface CarouselProps {
  items: React.ReactNode[]; // Lista de itens (imagens ou texto)
}

const Carousel: FC<CarouselProps> = ({ items }) => {
  return (
    <div className="min-w-full relative py-3">
      <motion.div
        className="flex gap-4"
        initial={{ x: 0 }}
        transition={{
          ease: "linear",
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        animate={{ x: ["0%", "-130%"] }}
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
