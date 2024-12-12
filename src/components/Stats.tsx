"use client";

import { iStat } from "@/mocks/professional";
import CountUp from "react-countup";

const Stats = ({ stats }: { stats: iStat[] }) => {
  return (
    <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex-1 flex gap-2 items-center justify-center xl:justify-start"
        >
          <CountUp
            end={stat.value}
            prefix={stat.prefix}
            duration={2}
            delay={1}
            separator=" "
            className="flex text-4xl xl:text-6xl font-extrabold gap-2 text-white"
          />
          <p className={`text-base xl:text-lg leading-snug text-white/80`}>
            {stat.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
