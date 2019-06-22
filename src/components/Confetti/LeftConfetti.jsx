import React from "react"
import styled from "@emotion/styled"
import LeftConfettiImg from "../../imgs/other/half-confetti-light-left.svg"

const LeftConfetti = () => (
  <LefttConfettiWrapper>
    <img src={LeftConfettiImg} alt="confetti" />
  </LefttConfettiWrapper>
)

export default LeftConfetti

const LefttConfettiWrapper = styled.section`
  position: relative;
  height: 135px;
  img {
    width: 127%;
    max-width: 750px;
    position: absolute;
    left: -31px;
    @media screen and (min-width: 662px) {
      height: 151px;
      top: 0;
      left: -15vw;
      width: 80%;
    }
  }
`
