import AllRight from "@/components/AllRight";
import { ReCaptchaProvider } from "next-recaptcha-v3";
import React from "react";

const ContactLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ReCaptchaProvider
      accessKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
      language="pt-BR"
    >
      {children}
      <AllRight />
    </ReCaptchaProvider>
  );
};

export default ContactLayout;
