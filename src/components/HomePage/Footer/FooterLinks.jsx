import React from "react"
import styled from "@emotion/styled"
import { colors } from "../../../ReusableComponents/colors"
import TwitterSVG from "../../../imgs/other/twitter.svg"
import DEVtoSVG from "../../../imgs/other/dev.svg"

const FooterLinks = () => (
  <FooterLinksWrapper>
    <LogoLinks href="https://twitter.com/WhatTheCSS">
      <img src={TwitterSVG} alt="twitter icon" />
    </LogoLinks>
    <LogoLinks href="https://dev.to/whatthecss">
      <img src={DEVtoSVG} alt="dev.to icon" />
    </LogoLinks>
  </FooterLinksWrapper>
)

export default FooterLinks

const FooterLinksWrapper = styled.section`
  padding: 40px 0;
  text-align: center;
`

const LogoLinks = styled.a`
  border-radius: 50%;
  height: 60px;
  width: 60px;
  display: inline-block;
  color: white;
  border: 3px solid white;
  transition: 0.2s;
  margin: auto;
  margin-right: 15px;
  &:hover {
    transition: 0.2s;
    transform: translateY(-10px);
  }
  &:first-of-type {
    background-color: ${colors.red};
  }
  &:last-of-type {
    background-color: ${colors.teal};
  }

  img {
    width: 25px;
  }

  &:first-of-type {
    padding: 14px;
  }

  &:last-of-type {
    padding: 13px;
    img {
      width: 23px;
    }
  }
`
