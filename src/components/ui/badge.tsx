import React from "react";

const Badge = ({ text }: { text: string }) => {
  return (
    <div className="px-2.5 py-1 bg-accent rounded-full justify-center items-center gap-2.5 flex">
      <div className="text-center text-primary text-xs font-semibold font-['Inter'] leading-none">
        {text}
      </div>
    </div>
  );
};

export default Badge;
