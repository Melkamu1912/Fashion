import React from "react";
import {Col, Image} from "react-bootstrap";
import SectionContainer from "../../components/SectionContainer";
import AboutBlocks from "./AboutBlocks";
import AboutSponsor from "./AboutSponsor";
import {AiOutlineCheckCircle} from "react-icons/ai";
import {RowReversedStyled} from "./About.styled";
import {paragraphs} from "./aboutData";
import aboutImage from "../../assets/about1.jpg";

const About = () => {
  return (
    <>
      <SectionContainer id={"about"} secName={"about-sec"}>
        <RowReversedStyled className="my-2">
          <Col lg={6} className="mb-3">
            <h3>
            Welcome to Cool Fashion, where style meets innovation. 
            </h3>
            <p className="fst-italic">
            At Cool Fashion, we believe that fashion is not just about clothing;
             it’s a form of self-expression and confidence. Our mission is to empower
              individuals to discover their unique style
             through our carefully curated collections and personalized fashion experiences.
            </p>
            <ul>
              {paragraphs.map((par, idx) => (
                <li className="mb-3" key={idx}>
                  <AiOutlineCheckCircle
                    className="me-1"
                    size={24}
                    color={"var(--ds-blood)"}
                  />
                  {par}
                </li>
              ))}
            </ul>
            
          </Col>
          <Col lg={6} className="mb-3">
            <Image
              src={aboutImage}
              alt="about-img"
              width="100%"
              height="auto"
            />
          </Col>
        </RowReversedStyled>
        <AboutBlocks />
      </SectionContainer>
      <AboutSponsor />
    </>
  );
};

export default About;
