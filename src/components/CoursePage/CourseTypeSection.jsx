import React from "react"
import styled from "@emotion/styled"
import { HalfGridContainer } from "../../ReusableComponents/containers"
import WTCSSRocketImg from "../../imgs/course/wtcss_rocket.svg"
import WTCSSWebsiteIconLaptopImg from "../../imgs/header/WTCSS-Website-Icon-Laptop-MAR2019.svg"

const CourseTypeSection = () => (
  <CourseTypeSections>
    <CourseTypeSectionContainer>
      <img src={WTCSSRocketImg} alt="" />
      <h2>Challenge Days</h2>
      <p>
        On Challenge Days, you will receive a short CSS lesson, an interactive
        exercise with a list of resources, ending with a coding challenge.
      </p>
    </CourseTypeSectionContainer>
    <CourseTypeSectionContainer>
      <img src={WTCSSWebsiteIconLaptopImg} alt="" />
      <h2>Client Days</h2>
      <p>
        Client Days will introduce you to a Mascot Co. employee that is in
        desperate need of your coding expertise.
      </p>
    </CourseTypeSectionContainer>
  </CourseTypeSections>
)

export default CourseTypeSection

const CourseTypeSections = styled(HalfGridContainer)`
  grid-column-gap: 50px;
`

const CourseTypeSectionContainer = styled.div`
  @media screen and (min-width: 776px) {
    text-align: center;
  }
  img {
    max-height: 170px;
  }
  p {
    text-align: left;
  }
  @media screen and (max-width: 425px) {
    margin-bottom: 30px;
    p,
    h2 {
      text-align: center;
    }
  }
  &:last-child {
    margin-bottom: 0;
  }
`
