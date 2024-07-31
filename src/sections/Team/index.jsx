import React from "react";
import SectionContainer from "../../components/SectionContainer";
import SectionHead from "../../components/SectionHead";
import TeamBlock from "./TeamBlock";

const Team = () => {
  return (
    <SectionContainer id={"team"} secName={"team-sec"}>
      <SectionHead
        head={"team"}
        text={
          "Meet Our Creative Collective: Passionate Visionaries Crafting the Future of Fashion."
        }
      />
      <TeamBlock />
    </SectionContainer>
  );
};

export default Team;
