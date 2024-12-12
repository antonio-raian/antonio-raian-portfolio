import AllRight from "@/components/AllRight";
import Footer from "@/components/Footer";
import Socials from "@/components/Socials";
import React from "react";

const ContactLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      {children}
      <AllRight />
    </div>
  );
};

export default ContactLayout;
