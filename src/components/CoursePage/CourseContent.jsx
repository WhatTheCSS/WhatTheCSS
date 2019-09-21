import React from "react"
import styled from "@emotion/styled"
import { RedButton } from "../../ReusableComponents/buttons"
import { colors } from "../../ReusableComponents/colors"
import CourseTypeSection from "./CourseTypeSection"
import CourseOutline from "./CourseOutline"
import ClientDaysSection from "./ClientDaysSection"
import Checkout from "../checkout"

const CourseContent = () => (
  <CourseContentWrapper>
    <div>
      <h1>The Course</h1>
      <p>
        The 30 day journey consists of a mix of Challenge Days and Client Days.
        Each day will include a CSS lesson, an example project or interactive
        exercise, a challenge, resources and a music playlist.
      </p>
      <CourseTypeSection />
      <Checkout cancelRedirectLink="https://localhost:8000/course" red />
      <CourseOutline />
      <ClientDaysSection />
    </div>
  </CourseContentWrapper>
)

export default CourseContent

const CourseContentWrapper = styled.section`
  max-width: 1000px;
  margin: auto;
  padding: 40px;
  @media screen and (max-width: 992px) {
    padding: 20px;
  }
`
