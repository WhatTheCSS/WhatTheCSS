import React from "react"
import styled from "@emotion/styled"
import { colors } from "../../ReusableComponents/colors"
import CompassCoffeeImg from "../../imgs/about/compass-image-one@2x.png"
import WTCSSHiking from "../../imgs/about/wtcss-hiking.jpg"
import BoardGamesImg from "../../imgs/about/board-games.jpg"

const AboutImages = () => (
  <AboutImgsWrapper className="about-imgs">
    <img
      src={CompassCoffeeImg}
      alt="Rebecca and Devon working on their laptops at Compass Coffee"
    />
    <img
      src={WTCSSHiking}
      alt="Devon, Brittany and Nathan posing at the top of a peak at Shenandoah National Park"
    />
    <img
      src={BoardGamesImg}
      alt="Brittany, Devon, Nathan and Rebecca posting for an image at a Boardgame event"
    />
  </AboutImgsWrapper>
)

export default AboutImages

const AboutImgsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  justify-items: center;
  align-items: center;
  margin-bottom: 40px;
  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr;
  }
  img {
    width: 100%;
    max-width: 350px;
    display: inline-block;
    margin: 10px auto 30px auto;

    @media screen and (min-width: 992px) {
      margin: 20px;
      width: 100%;
      max-width: auto;
    }
  }
  img:first-child {
    box-shadow: -10px -10px 0 ${colors.red};
  }
  img:nth-child(2) {
    max-width: 300px;
    box-shadow: -10px 10px 0 ${colors.yellow};
    max-width: 250px;
  }
  img:nth-child(3) {
    box-shadow: 10px 10px 0 ${colors.teal};
  }
`
