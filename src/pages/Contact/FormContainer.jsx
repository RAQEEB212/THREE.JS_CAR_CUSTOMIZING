import React from "react";
import ContactForm from "./ContactForm";
import ContactInformation from "./ContactInformation";


export default function FormContainer() {
  return (
    <div className="p-1 bg-white ">
      {/* Contact information */}
          <ContactInformation/>
      <ContactForm />
    </div>
  );
}
