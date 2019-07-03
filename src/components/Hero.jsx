import React, { Component } from "react"
import styled from "@emotion/styled"
import { colors } from "../ReusableComponents/colors"
import Nav from "./Nav"
import HomePageHeaderImg from "../imgs/header/WTCSS_pageheaders_home@2x.png"
import AboutPageHeaderImg from "../imgs/header/WTCSS_pageheader_about.svg"
import CoursePageHeaderImg from "../imgs/header/WTCSS_pageheaders_course.png"
import { TopConfettiLayer } from "./Confetti/TopConfettiLayer"

const Hero = ({ currentPage }) => (
  <>
    {currentPage === "about" ? (
      <AboutHeroWrapper>
        <Nav currentPage={currentPage} />
        <AboutHeroContainer>
          <AboutHeroContent>
            <h1>
              The <span>Team</span>
            </h1>
          </AboutHeroContent>
          <AboutImg>
            <img
              src={AboutPageHeaderImg}
              alt="coffee mug with a What the CSS?! logo (question mark and exclamation point) sticker on it."
            />
          </AboutImg>
        </AboutHeroContainer>
        <TopConfettiLayer />
      </AboutHeroWrapper>
    ) : currentPage === "course" ? (
      <HeroWrapper>
        <Nav currentPage={currentPage} />
        <HeroContainer>
          <CourseHeroContent>
            <h1>
              The <span>Course</span>
            </h1>
          </CourseHeroContent>
          <CourseHeroImg>
            <img
              src={CoursePageHeaderImg}
              alt="illustration of a red notebook with a What the CSS?! logo (question mark and exclamation point) on it."
            />
          </CourseHeroImg>
        </HeroContainer>
        <TopConfettiLayer />
      </HeroWrapper>
    ) : (
      <HeroWrapper>
        <Nav />
        <HeroContainer>
          <HeroContent>
            <h1>
              What the <span>CSS?!</span>
            </h1>
          </HeroContent>
          <HeroImg>
            <img
              src={HomePageHeaderImg}
              alt="Family portrait of What the CSS?! mascots including a bull dog, a flamingo, a black cat, a bunny and a fox all wearing clothing."
            />
          </HeroImg>
        </HeroContainer>
        <TopConfettiLayer />
      </HeroWrapper>
    )}
  </>
)

export default Hero

const HeroWrapper = styled.section`
  position: relative;
  padding-bottom: 50px;
  @media screen and (min-width: 425px) {
    margin-top: 50px;
  }
`

const HeroContainer = styled.section`
  padding: 0 30px;
  @media screen and (min-width: 992px) {
    padding: 100px 40px 100px 100px;
    position: relative;
    max-width: 1200px;
    margin: auto;
  }
`

const HeroContent = styled.div`
  text-align: center;
  padding: 50px 20px;
  background-color: ${colors.teal};
  @media screen and (max-width: 425px) {
    padding: 10px 20px;
  }
  @media screen and (min-width: 667px) {
    max-width: 540px;
  }
  @media screen and (max-width: 992px) {
    margin: auto;
  }
  @media screen and (min-width: 992px) {
    margin-left: 100px;
  }
  @media (min-width: 992px) and (max-width: 1100px) {
    max-width: 440px;
  }
  h1 {
    color: white;
    font-size: 60px;
    font-weight: 400;
    line-height: 83px;
    text-transform: uppercase;
    margin: 0;
    @media screen and (min-width: 992px) {
      padding-right: 20px;
    }
    span {
      font-weight: 800;
      font-size: 100px;
    }
    @media screen and (max-width: 425px) {
      font-size: 36px;
      span {
        font-size: 90px;
      }
    }
  }
`
const HeroImg = styled.div`
  img {
    width: 100%;
    max-width: 540px;
    display: block;
    margin: auto;
    @media screen and (min-width: 992px) {
      transform: rotate(7deg);
    }
  }
  @media screen and (min-width: 992px) {
    max-width: 450px;
    position: absolute;
    right: 50px;
    top: 0;
  }
  @media (min-width: 992px) and (max-width: 1100px) {
    max-width: 375px;
    top: 50px;
  }
`

const AboutHeroWrapper = styled(HeroWrapper)`
  position: relative;
  padding-bottom: 50px;
`

const AboutHeroContainer = styled(HeroContainer)`
  position: relative;
  @media screen and (max-width: 425px) {
    padding: 0 20px;
  }
  @media screen and (min-width: 992px) {
    padding: 100px 40px 100px 100px;
    position: relative;
    max-width: 1200px;
    margin: auto;
  }
  @media screen and (max-width: 992px) {
    margin-bottom: 100px;
  }
`

const AboutHeroContent = styled.div`
  text-align: center;
  padding: 50px 20px;
  background-color: ${colors.red};
  max-width: 540px;
  margin: auto;
  h1 {
    color: white;
    font-size: 60px;
    font-weight: 400;
    line-height: 83px;
    text-transform: uppercase;
    margin: 0;
    @media screen and (min-width: 992px) {
      padding-right: 20px;
    }
    span {
      display: block;
      font-weight: 600;
      font-size: 100px;
    }
    @media screen and (max-width: 425px) {
      font-size: 36px;
      span {
        font-size: 90px;
      }
    }
  }
  @media screen and (max-width: 425px) {
    padding: 10px 20px;
  }
  @media screen and (min-width: 667px) {
    max-width: 540px;
  }
  @media screen and (max-width: 992px) {
    margin: auto;
  }
  @media (min-width: 992px) and (max-width: 1100px) {
    max-width: 440px;
  }
`

const AboutImg = styled.div`
  position: absolute;
  margin-top: 80px;
  width: 100%;
  max-width: 450px;

  img {
    width: 46%;
    display: block;
    margin: auto;
    padding: 15px;
    padding-left: 25px;
    @media screen and (max-width: 992px) {
      position: absolute;
      bottom: 0px;
      left: -86px;
      height: 198px;
      width: 100%;
      max-height: none;
      transform: rotate(-14deg);
    }
  }

  @media screen and (min-width: 992px) {
    margin-top: 0px;
    right: 5%;
    bottom: 10px;
    transform: rotate(-5deg);
  }
`

const CourseHeroContent = styled(HeroContent)`
  background-color: ${colors.yellow};
  max-width: 540px;

  h1 span {
    font-weight: 800;
    font-size: 100px;
    display: block;
    @media screen and (max-width: 667px) {
      font-size: 80px;
    }
    @media screen and (max-width: 425px) {
      font-size: 60px;
    }
  }
`

const CourseHeroImg = styled(HeroImg)`
  margin-top: 80px;
  width: 100%;
  max-width: 540px;
  background-color: ${colors.lightBlue};

  img {
    width: 70%;
    display: block;
    margin: auto;
    padding: 15px;
  }

  @media screen and (min-width: 992px) {
    margin-top: 40px;
    max-width: 400px;
    right: 8%;
    top: 28px;
    transform: rotate(-5deg);
    img {
      transform: rotate(0deg);
    }
  }

  @media screen and (max-width: 992px) {
    margin: auto;
    margin-top: -15px;

    img {
      max-width: 50%;
      max-height: 40%;
      display: block;
      margin: 15px auto;
    }
  }
`
