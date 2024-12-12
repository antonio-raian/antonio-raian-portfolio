import { ContactForm } from "@/components/ContactForm";
import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative w-full h-svh pt-3 flex-col justify-center items-center inline-flex"
    >
      <ContactForm />
    </section>
  );
};

export default Contact;
