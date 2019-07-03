import React from "react"
import styled from "@emotion/styled"
import { colors } from "../../ReusableComponents/colors"
import FooterForm from "./FooterForm"
import FooterLinks from "./FooterLinks"

const Footer = ({ currentPage }) => (
  <FooterWrapper>
    <FooterContainer>
      <FooterForm currentPage={currentPage} />
      <FooterLinks currentPage={currentPage} />
      {currentPage === "about" ? (
        <FooterLegalLinks dark>
          <a href="/privacy/index.html">Terms and Services</a>
        </FooterLegalLinks>
      ) : (
        <FooterLegalLinks>
          <a href="/privacy/index.html">Terms and Services</a>
        </FooterLegalLinks>
      )}
    </FooterContainer>
  </FooterWrapper>
)

export default Footer

const FooterWrapper = styled.footer`
  padding: 40px;
  position: relative;
  @media screen and (max-width: 662px) {
    padding: 0px;
  }
`

const FooterContainer = styled.section`
  max-width: 1000px;
  margin: auto;
  padding: 40px;
  @media screen and (max-width: 662px) {
    padding: 40px 20px;
  }
`

const FooterLegalLinks = styled.section`
  text-align: center;
  a {
    color: ${props => (props.dark ? colors.blue : colors.white)};
    &:hover {
      color: ${colors.yellow};
    }
  }
`
