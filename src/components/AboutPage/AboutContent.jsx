import React from "react"
import styled from "@emotion/styled"
import AboutImages from "./AboutImages"
import AboutProfiles from "./AboutProfiles"
import RightConfetti from "../Confetti/RightConfetti"

const AboutContent = () => (
  <AboutContentWrapper className="about-content">
    <h1>Who We Are</h1>
    <AboutImages />
    <p>
      Our team is a Washington, DC based group of quirky creatives that have a
      genuine love for web development. We are three coding bootcamp grads and
      one clutch graphic designer taking on the challenge of making CSS more
      approachable and fun, even for those that declare “I can’t CSS!”.
    </p>
    <RightConfettiAboutPage light={false} />
    <h2>Our Team</h2>
    <AboutProfiles />
  </AboutContentWrapper>
)

export default AboutContent

const AboutContentWrapper = styled.section`
  max-width: 1000px;
  margin: auto;
  padding: 40px;

  & > h2 {
    text-align: center;
    margin-top: 70px;
    @media screen and (max-width: 425px) {
      margin: 0 auto 30px auto;
    }
  }
  button {
    margin-bottom: 40px;
  }
  & > h1 {
    margin-top: 80px;
    margin-bottom: 20px;
    text-align: center;

    @media screen and (max-width: 992px) {
      text-align: center;
      margin-bottom: 40px;
    }
  }
`
const RightConfettiAboutPage = styled(RightConfetti)`
  right: -30%;
  @media screen and (max-width: 425px) {
    width: 173%;
    right: -85px;
  }
`
