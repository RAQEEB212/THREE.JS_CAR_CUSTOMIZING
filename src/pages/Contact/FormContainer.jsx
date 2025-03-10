import React from "react";
import ContactForm from "./ContactForm";
import ContactInformation from "./ContactInformation";
import letterSend from "../../assets/images/letter_send.png"

export default function FormContainer() {
  return (
    <div className="relative p-2 min-h-[629px] gap-y-16 lg:flex-row bg-white flex flex-col rounded-xl lg:items-center shadow-all-over overflow-hidden">
      {/* Contact information */}
      <ContactInformation />
      <ContactForm />
      <img src={letterSend} alt="vectore image" className="absolute w-48 right-0 bottom-0 -rotate-[60.75deg]" />
    </div>
  );
}
