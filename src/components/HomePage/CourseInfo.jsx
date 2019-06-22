import React from "react"
import styled from "@emotion/styled"
import { colors } from "../../ReusableComponents/colors"
import { TealButton } from "../../ReusableComponents/buttons"

const CourseInfo = () => (
  <CourseInfoWrapper>
    <CourseImg>{/*add svg + svg animations*/}</CourseImg>
    <CourseContent>
      <h2>The Course</h2>
      <p>
        From SVG animations to tackling reponsive design, you’ll soon discover
        all the awesome things CSS has to offer.
      </p>
      <TealButton href="https://www.whatthecss.com/course">
        View Course Content
      </TealButton>
    </CourseContent>
  </CourseInfoWrapper>
)

export default CourseInfo

const CourseInfoWrapper = styled.section`
  max-width: 1000px;
  margin: auto;
  padding: 40px;
  @media screen and (max-width: 662px) {
    padding: 0;
  }
`
const CourseImg = styled.div`
  background-color: ${colors.lightBlue};
  padding: 20px;
  position: relative;
  margin-bottom: 70px;
  &:after {
    position: absolute;
    content: "";
    width: 90%;
    height: 50px;
    right: -32px;
    bottom: -27px;
    background-color: ${colors.yellow};
  }
  &:before {
    position: absolute;
    content: "";
    width: 28px;
    height: 105%;
    right: -16px;
    top: 16px;
    background-color: ${colors.red};
  }
  @media screen and (max-width: 662px) {
    &:after {
      height: 30px;
      bottom: -20px;
    }
  }
`

const CourseContent = styled.div`
  max-width: 700px;
  margin: auto;
  @media screen and (max-width: 662px) {
    padding: 0 20px 20px 20px;
  }
`
