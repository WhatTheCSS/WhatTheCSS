import React from "react"
import styled from "@emotion/styled"
import AboutContent from "./AboutContent"
import { colors } from "../../ReusableComponents/colors"
import Hero from "../Hero"
import Footer from "../Footer/Footer"

const About = () => (
  <>
    <Hero page="about" />
    <AboutPageWrapper>
      <AboutContent />
      <Footer page="about" />
    </AboutPageWrapper>
  </>
)

export default About

const AboutPageWrapper = styled.div`
  background-color: ${colors.lightBlue};
  color: ${colors.blue};
  margin-top: 65px;
  padding: 130px 30px 20px 30px;
  overflow: hidden;
`
