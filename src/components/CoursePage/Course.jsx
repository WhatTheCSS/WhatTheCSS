import React from "react"
import styled from "@emotion/styled"
import { colors } from "../../ReusableComponents/colors"
import CourseContent from "./CourseContent"
import Hero from "../Hero"
import Footer from "../Footer/Footer"

const Course = () => (
  <>
    <Hero currentPage="course" />
    <CourseWrapper>
      <CourseContent />
      <Footer currentPage="course" />
    </CourseWrapper>
  </>
)

export default Course

const CourseWrapper = styled.section`
  margin-top: 65px;
  padding: 130px 30px 20px 30px;
  overflow: hidden;
  background-color: ${colors.blue};
  color: ${colors.white};
`
