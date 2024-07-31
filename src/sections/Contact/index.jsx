import React from "react";
import SectionContainer from "../../components/SectionContainer";
import SectionHead from "../../components/SectionHead";
import ContactInfoBlock from "./ContactInfoBlock";
import ContactMapFormBlock from "./ContactMapFormBlock";

const Contact = () => {
  return (
    <SectionContainer id={"contact"} secName={"contact-sec"}>
      <SectionHead
        head={"contact"}
        text={
          "Reach out to the Cool Fashion team for style advice, inquiries, or collaborations. We’re here to elevate your fashion journey"
        }
      />
      <ContactInfoBlock />
      <ContactMapFormBlock />
    </SectionContainer>
  );
};

export default Contact;
