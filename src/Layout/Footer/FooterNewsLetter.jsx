import React from "react";
import {FooterNewsLetterStyled} from "./footer.styled";
import {Form} from "react-bootstrap";
import CustomButton from "../../components/CustomButton";

const FooterNewsLetter = () => {
  return (
    <FooterNewsLetterStyled>
      <h4>Our Newsletter</h4>
      <p>
      Subscribe to Our Cool Fashion Newsletter for Exclusive Style Insights and VIP Access!
      </p>
      <div className="subscribe-form">
        <Form.Control type="text" />
        <CustomButton type="regular-pricing-btn">Subscribe</CustomButton>
      </div>
    </FooterNewsLetterStyled>
  );
};

export default FooterNewsLetter;
