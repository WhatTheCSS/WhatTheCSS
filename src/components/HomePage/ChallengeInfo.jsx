import React from "react"
import styled from "@emotion/styled"
import CatHomeImg from "../../imgs/homepage/cat-home.svg"
import FlamingoHomeImg from "../../imgs/homepage/flamingo-home.svg"
import FoxHomeImg from "../../imgs/homepage/fox-home.svg"
import MascotChallengesImg from "../../imgs/homepage/mascots-challenges.svg"

const ChallengeInfo = () => (
  <ChallengeInfoWrapper>
    <ChallengeImgs>
      <ChallengeImg>
        <img
          src={CatHomeImg}
          alt="An illustrated black cat wearing a sports jersey"
        />
      </ChallengeImg>
      <ChallengeImg>
        <img
          src={FlamingoHomeImg}
          alt="An illustrated flamingo wearing 80s workout gear"
        />
      </ChallengeImg>
      <ChallengeImg>
        <img
          src={FoxHomeImg}
          alt="an illustrated fox wearing an American revolutionary solider's uniform"
        />
      </ChallengeImg>
      <MobileChallengeImg
        src={MascotChallengesImg}
        alt="an illustrated fox wearing an American revolutionary solider's uniform, flamingo wearing 80s workout gear and black cat wearing a sports jersey"
      />
    </ChallengeImgs>
    <ChallengeContent>
      <h2>50+ Challenges & Exercises</h2>
      <p>
        The course includes more than 50 fun themed exercises and challenges
        that can serve as awesome pieces for your portfolio.
      </p>
      <p>
        Each challenge day centers around a fun theme where you’ll be tasked to
        direct your own theatre production, build a sports team homepage, create
        your own retro fitness commercial and more!
      </p>
    </ChallengeContent>
  </ChallengeInfoWrapper>
)

export default ChallengeInfo

const ChallengeInfoWrapper = styled.section`
  max-width: 1000px;
  margin: auto;
  padding: 40px;
  @media screen and (max-width: 662px) {
    padding: 40px 20px;
  }
`

const ChallengeImgs = styled.div`
  text-align: center;
  @media screen and (max-width: 776px) {
    margin-bottom: 40px;
  }
`

const ChallengeImg = styled.div`
  width: 100%;
  margin-bottom: 15px;
  z-index: 1;
  position: relative;
  display: inline-block;
  max-width: 250px;
  @extend %easeanimation;
  margin-right: 50px;
  @media screen and (max-width: 776px) {
    display: none;
  }
  @media screen and (min-width: 776px) {
    display: inline-block;
    width: 250px;
  }
  &:last-of-type {
    margin-right: 0;
  }

  img {
    width: 100%;
  }
`

const MobileChallengeImg = styled.img`
  max-width: 300px;
  margin: auto;
  @media screen and (max-width: 776px) {
    display: block;
    max-width: 100%;
  }
  @media screen and (min-width: 776px) {
    display: none;
  }
`
const ChallengeContent = styled.div`
  max-width: 700px;
  margin: auto;
`
