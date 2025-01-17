import React from "react";
import SectionContainer from "../../components/SectionContainer";
import SectionHead from "../../components/SectionHead";
import PricingBlock from "./PricingBlock";

const Pricing = () => {
  return (
    <SectionContainer id={"pricing"} secName={"pricing-sec"}>
      <SectionHead
        head={"pricing"}
        text={
          "Quality meets affordability in every piece we offer"
        }
      />
      <PricingBlock />
    </SectionContainer>
  );
};

export default Pricing;
