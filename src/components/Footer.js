import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
  height: 100px;
  width: 100%;
  background: black;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 999;
`;

const Footer = () => {
  return (
    <FooterDiv className="footer">
      © 2021 BxScioly. All Rights Reserved.
    </FooterDiv>
  );
};

export default Footer;
