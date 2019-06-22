import React from "react"
import styled from "@emotion/styled"
import { HalfGridContainer } from "../../ReusableComponents/containers"
import { RedButton } from "../../ReusableComponents/buttons"
import BunnyHomepageImg from "../../imgs/homepage/bunny-homepage.png"
import { colors } from "../../ReusableComponents/colors"

const ClientInfo = () => (
  <ClientInfoWrapper>
    <ClientImageContainer>
      <img src={BunnyHomepageImg} alt="" />
    </ClientImageContainer>
    <div>
      <h2>Client Days</h2>
      <p>The Event Director at Mascot Co. needs a funky event form, stat!</p>
      <p>
        Throughout the course you will work with various employees of Mascot
        Co., a company offering cool co-working spaces, to complete a series of
        web projects. Can you navigate the various personalities and client
        demands to deliver awesome products?
      </p>
      <RedButton
        href="https://www.whatthecss.com/course#clients"
        title="Go to the Client Days section on the course page"
      >
        Meet The Staff
      </RedButton>
    </div>
  </ClientInfoWrapper>
)

export default ClientInfo

const ClientInfoWrapper = styled(HalfGridContainer)`
  max-width: 1000px;
  margin: auto;
  padding: 40px;
  @media screen and (max-width: 662px) {
    padding: 40px 20px;
  }
`

const ClientImageContainer = styled.div`
  z-index: 2;
  position: relative;
  margin-bottom: 50px;
  max-width: 300px;
  width: 100%;
  img {
    width: 100%;
  }
  &:before,
  &:after {
    position: absolute;
    content: "";
  }
  &:before {
    background-color: ${colors.green};
    height: 379px;
    width: 80px;
    top: -5%;
    right: 29%;
    z-index: -1;
    transform: rotate(45deg);
    @media screen and (min-width: 992px) {
      height: 416px;
      right: 32%;
    }
  }
  &:after {
    background-color: ${colors.teal};
    height: 300px;
    width: 100px;
    top: 19%;
    left: -10%;
    z-index: -2;
    @media screen and (min-width: 992px) {
      height: 286px;
      left: -5%;
    }
  }
  @media screen and (min-width: 768px) {
    margin: auto;
  }
`
