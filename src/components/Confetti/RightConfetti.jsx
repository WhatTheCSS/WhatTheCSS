import React from "react"
import styled from "@emotion/styled"
import RightConfettiImg from "../../imgs/other/half-confetti-light-right.svg"

const RightConfetti = () => (
  <RightConfettiWrapper>
    <img src={RightConfettiImg} alt="confetti" />
  </RightConfettiWrapper>
)

export default RightConfetti

const RightConfettiWrapper = styled.section`
  position: relative;
  height: 135px;
  img {
    width: 127%;
    max-width: 750px;
    position: absolute;
    right: -31px;
    @media screen and (min-width: 662px) {
      height: 151px;
      top: 0;
      right: -15vw;
      width: 80%;
    }
  }
`
