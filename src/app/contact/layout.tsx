import AllRight from "@/components/AllRight";
import { ReCaptchaProvider } from "next-recaptcha-v3";
import React from "react";

const ContactLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ReCaptchaProvider language="pt-BR">
      {children}
      <AllRight />
    </ReCaptchaProvider>
  );
};

export default ContactLayout;
