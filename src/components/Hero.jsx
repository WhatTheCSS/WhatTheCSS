import React from "react"
import styled from "@emotion/styled"
import { colors } from "../ReusableComponents/colors"
import Nav from "./Nav"
import HomePageHeaderImg from "../imgs/header/WTCSS_pageheaders_home@2x.png"
import { TopConfettiLayer } from "./Confetti/TopConfettiLayer"

const Hero = () => (
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
