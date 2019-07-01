import React from "react"
import styled from "@emotion/styled"
import { colors } from "../../ReusableComponents/colors"
import IntroText from "./IntroText"
import ChallengeInfo from "./ChallengeInfo"
import CourseInfo from "./CourseInfo"
import ClientInfo from "./ClientInfo"
import RightConfetti from "../Confetti/RightConfetti"
import BonusInfo from "./BonusInfo"
import LeftConffetti from "../Confetti/LeftConfetti"
import Footer from "../Footer/Footer"

const Home = () => (
  <MainWrapper>
    <IntroText />
    <ChallengeInfo />
    <CourseInfo />
    <RightConfetti light={true} />
    <ClientInfo />
    <BonusInfo />
    <LeftConffetti />
    <Footer />
  </MainWrapper>
)

export default Home

const MainWrapper = styled.section`
  margin-top: 65px;
  padding: 130px 30px 20px 30px;
  overflow: hidden;
  background-color: ${colors.blue};
  color: white;
  @media screen and (max-width: 425px) {
    padding: 100px 10px 20px 10px;
  }
`
