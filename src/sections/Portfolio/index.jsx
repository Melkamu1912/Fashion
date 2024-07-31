import React from "react";
import SectionContainer from "../../components/SectionContainer";
import SectionHead from "../../components/SectionHead";
import PortfolioBlock from "./PortfolioBlock";

const Portfolio = () => {
  return (
    <SectionContainer id={"portfolio"} secName={"portfolio-sec"}>
      <SectionHead
        head={"portfolio"}
        text={
          `
           Cool Fashion Design is more than just a label—it's a lifestyle.
           We blend cutting-edge trends with timeless elegance to redefine contemporary style.
            Our designs inspire confidence and celebrate individuality, offering a fusion of innovation and sophistication.
             From casual chic to haute couture, Cool Fashion Design sets the standard for modern, dynamic fashion. Embrace the
           essence of cool with designs that elevate your wardrobe and empower your personal expression.
          `
        }
      />
      <PortfolioBlock />
    </SectionContainer>
  );
};

export default Portfolio;
