import React, { Component } from "react"
import styled from "@emotion/styled"
import { colors } from "../ReusableComponents/colors"
import Nav from "./Nav"
import HomePageHeaderImg from "../imgs/header/WTCSS_pageheaders_home@2x.png"
import AboutPageHeaderImg from "../imgs/header/WTCSS_pageheader_about.svg"
import { TopConfettiLayer } from "./Confetti/TopConfettiLayer"

const Hero = ({ page }) => (
  <>
    {page === "about" ? (
      <AboutHeroWrapper>
        <Nav currentPage={page} />
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
    ) : page === "course" ? (
      <HeroWrapper>
        <Nav />
        <HeroContainer>
          <HeroContent>
            <h1>
              The <span>Course</span>
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
  @media screen and (min-width: 425px) {
    margin-bottom: 100px;
  }
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
  margin-bottom: 100px;
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
      font-weight: 500;
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
