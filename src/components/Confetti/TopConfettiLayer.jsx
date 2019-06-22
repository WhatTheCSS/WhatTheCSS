import styled from "@emotion/styled"
import TopConfettiImg from "../../imgs/other/top-confetti.svg"

export const TopConfettiLayer = styled.section`
  background-size: contain;
  background-repeat: repeat-x;
  min-height: 200px;
  max-width: 100%;
  position: absolute;
  width: 100%;
  z-index: 999;
  background-image: url(${TopConfettiImg});
  bottom: -170px;
  background-position: center;
  @media screen and (min-width: 667px) {
    bottom: -200px;
    background-position: top;
    min-height: 300px;
  }
  @media screen and (max-width: 425px) {
    background-size: cover;
  }
`
