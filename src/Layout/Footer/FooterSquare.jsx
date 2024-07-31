import React from "react";
import {FooterSquareStyled} from "./footer.styled";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const FooterSquare = () => {
  return (
    <FooterSquareStyled>
      <h3>Cool Fashion</h3>
      <p className="mb-3">Debre-work Tower(13th floor),Mexico,Addis Ababa</p>
      <p className="mb-1">Phone: +2519-24460364</p>
      <p className="mb-1">Email: coolfashion@gmail.com</p>
      <ul>
        <li>
          <FaFacebookF />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaTwitter />
        </li>
        <li>
          <FaLinkedinIn />
        </li>
      </ul>
    </FooterSquareStyled>
  );
};

export default FooterSquare;
