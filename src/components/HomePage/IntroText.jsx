import React from "react"
import styled from "@emotion/styled"
import { TwoThirdGridContainer } from "../../ReusableComponents/containers"
import { RedButton } from "../../ReusableComponents/buttons"
import { colors } from "../../ReusableComponents/colors"

const IntroText = () => (
  <IntroTextWrapper>
    <IntroContent>
      <ComingSoon>COMING FALL 2019</ComingSoon>
      <h1>A 30 Day Email Course</h1>
      <p>
        What the CSS?! teaches the fun, tricky, and practical parts of CSS! You
        will receive quirky daily exercises, unique challenges and even test
        your skills working with a demanding client.
      </p>
    </IntroContent>
    <RedButton href="http://eepurl.com/dhmwZr">Sign Up</RedButton>
  </IntroTextWrapper>
)

export default IntroText

const IntroTextWrapper = styled(TwoThirdGridContainer)`
  max-width: 1000px;
  margin: auto;
  padding: 40px;
  @media screen and (max-width: 662px) {
    padding: 40px 20px;
  }
`

const IntroContent = styled.div`
  h1 {
    margin-top: 0;
    @media screen and (max-width: 425px) {
      margin-bottom: 10px;
      line-height: 1.2;
      font-size: 42px;
    }
  }
  p {
    line-height: 30px;
    margin-top: 10px;
  }
`

const ComingSoon = styled.p`
  color: ${colors.yellow};
  margin-bottom: 0;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.1px;
`
