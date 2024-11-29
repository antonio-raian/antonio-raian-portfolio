import { cn } from "@/lib/utils";
import React from "react";

interface MyLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  cursor?: string;
}
const MyLabel = ({ text, cursor, className }: MyLabelProps) => {
  return (
    <div className="text-center">
      <span className={cn("text-zinc-100 text-xl font-semibold", className)}>
        {text}{" "}
      </span>
      <span className="animate-blink text-accent text-xl font-medium">
        {cursor || "|"}
      </span>
    </div>
  );
};

export default MyLabel;
