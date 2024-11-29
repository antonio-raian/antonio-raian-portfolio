"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const Photo = () => {
  const { scrollYProgress } = useScroll(); // Hook para monitorar o progresso do scroll
  const yPosition = useTransform(scrollYProgress, [0, 0.2], [-480, 0]); // Define o movimento vertical

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 2, ease: "easeIn" },
      }}
      className="h-full w-full relative flex justify-center items-center flex-col"
    >
      <motion.div
      // style={{ y: yPosition }}
      >
        {/* Image */}
        <Image
          className="w-52 h-52 rounded-full"
          src="/assets/notionists.png"
          priority
          quality={100}
          alt="Photo"
          width={200}
          height={200}
        />
      </motion.div>
      {/* Circle */}
      <motion.svg
        className="absolute w-[230px]"
        viewBox={"0 0 506 506"}
        xmlns={"http://www.w3.org/2000/svg"}
      >
        <motion.circle
          cx={253}
          cy={253}
          r={250}
          stroke={"#00ff99"}
          strokeWidth={4}
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
          initial={{ strokeDasharray: "24 0 0 0" }}
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [360, 120],
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            repeatType: "reverse",
          }}
          fill={"transparent"}
        />
      </motion.svg>
    </motion.div>
  );
};

export default Photo;
