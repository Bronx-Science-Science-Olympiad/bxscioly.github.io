import React from "react";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons/lib";
const FooterDiv = styled.div`
  height: 50px;
  width: 100%;
  background: black;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 999;
`;
const Box = styled.div`
  padding: 40px;
  background: black;
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

const IconDiv = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 100%;
  background: #ffcd00;
  display: flex;
  justify-content: center;
  margin-right: 50px;
  align-items: center;
`;

const Footer = () => {
  return (
    <IconContext.Provider value={{ color: "black", size: "30" }}>
      <Box>
        <div style={{ display: "flex", marginLeft: "50px" }}>
          <IconDiv>
            <a
              href="https://www.instagram.com/bx_sci_oly/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaIcons.FaInstagram />
            </a>
          </IconDiv>
          <IconDiv>
            <a
              href="https://discord.gg/HPSZcY9V"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiIcons.RiDiscordFill />
            </a>
          </IconDiv>
          <IconDiv>
            <a
              href="https://www.facebook.com/Bxscioly/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiIcons.AiFillFacebook />
            </a>
          </IconDiv>
        </div>
      </Box>
      <FooterDiv className="footer">
        © 2021 BxScioly. All Rights Reserved.
      </FooterDiv>
    </IconContext.Provider>
  );
};

export default Footer;
