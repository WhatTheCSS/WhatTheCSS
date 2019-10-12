import React from "react"
import styled from "@emotion/styled"
import { colors } from "../../ReusableComponents/colors"
import { TwoThirdGridContainerReverse } from "../../ReusableComponents/containers"
import TheBasicsImg from "../../imgs/course/the_basics.png"
import LayoutsAndFormsImg from "../../imgs/course/layouts-and-forms.png"
import TheFunStuffImg from "../../imgs/course/the-fun-stuff.png"

const CourseOutline = () => (
  <CourseOutlineWrapper>
    <h2>COURSE OUTLINE</h2>
    <div>
      <CourseSection>
        <img src={TheBasicsImg} alt="abstract illustration of a website" />
        <div>
          <h3>The Basics</h3>
          <ul>
            <li>Welcome & Development Environment Set Up</li>
            <li>CSS Syntax</li>
            <li>Colors</li>
            <li>Typography</li>
            <li>CSS Variables</li>
            <li>Client Day</li>
            <li>Box Model</li>
            <li>Positioning & Centering</li>
            <li>Background</li>
            <li>Client Day</li>
          </ul>
        </div>
      </CourseSection>
      <CourseSection>
        <img
          src={LayoutsAndFormsImg}
          alt="abstract illustration of a website"
        />
        <div>
          <h3>Layouts & Forms</h3>
          <ul>
            <li>CSS Flexbox</li>
            <li>Responsive Design</li>
            <li>CSS Grid</li>
            <li>Wireframes & Layouts</li>
            <li>Client Day</li>
            <li>Website Case Study</li>
            <li>Form Elements</li>
          </ul>
        </div>
      </CourseSection>
      <CourseSection>
        <img src={TheFunStuffImg} alt="abstract illustration of a website" />
        <div>
          <h3>The Fun Stuff</h3>
          <ul>
            <li>Amazing CSS Tricks</li>
            <li>Client Day</li>
            <li>Animations Part 1</li>
            <li>Animations Part 2</li>
            <li>Creating CSS Images</li>
            <li>Animating CSS Images</li>
            <li>Client Day</li>
            <li>Creating SVG Images</li>
            <li>Animating SVG Images</li>
          </ul>
        </div>
      </CourseSection>
      <CourseSectionTwo>
        <h3>The Finale</h3>
        <ul>
          <li>Preprocessors</li>
          <li>Client Day</li>
          <li>CSS Tools, Tricks & Tips</li>
          <li>Final Project</li>
        </ul>
      </CourseSectionTwo>
    </div>
  </CourseOutlineWrapper>
)

export default CourseOutline

const CourseOutlineWrapper = styled.div`
  margin-top: 70px;
`

const CourseListContent = styled.div``

const CourseSection = styled(TwoThirdGridContainerReverse)`
  margin-bottom: 30px;
  img {
    width: 100%;
    max-width: 300px;
  }
  h3 {
    font-size: 30px;
    margin-bottom: 10px;
  }
  ul {
    list-style: none;
    padding: 0;
    li {
      display: inline-block;
      position: relative;
      margin: 7px;
      font-size: 21px;
      padding-left: 10px;
      padding-right: 10px;
      @media screen and (max-width: 776px) {
        display: block;
      }

      &:before {
        content: "*";
        position: absolute;
        top: 4px;
        left: -10px;
        color: ${colors.yellow};
      }
      &:first-child {
        &:after {
          content: "";
        }
      }
      li:last-child {
        margin-right: 0;
      }
      li:first-child {
        margin-left: 0;
      }
    }
    li:nth-child(2n) {
      &:before {
        color: ${colors.red};
      }
    }
    li:nth-child(4n) {
      &:before {
        color: ${colors.teal};
      }
    }
  }
`
const CourseSectionTwo = styled.div`
  margin-bottom: 30px;
  img {
    width: 100%;
    max-width: 300px;
  }
  h3 {
    font-size: 30px;
    margin-bottom: 10px;
  }
  ul {
    list-style: none;
    padding: 0;
    li {
      display: inline-block;
      position: relative;
      margin: 7px;
      font-size: 21px;
      padding-left: 10px;
      @media screen and (max-width: 776px) {
        display: block;
      }

      &:before {
        content: "*";
        position: absolute;
        top: 4px;
        left: -10px;
        color: ${colors.yellow};
      }
      &:first-child {
        &:after {
          content: "";
        }
      }
      li:last-child {
        margin-right: 0;
      }
      li:first-child {
        margin-left: 0;
      }
    }
    li:nth-child(2n) {
      &:before {
        color: ${colors.red};
      }
    }
    li:nth-child(4n) {
      &:before {
        color: ${colors.teal};
      }
    }
  }
`
