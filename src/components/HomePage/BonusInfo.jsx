import React from "react"
import styled from "@emotion/styled"
import { HalfGridContainer } from "../../ReusableComponents/containers"
import PlaylistImg from "../../imgs/homepage/playlist.svg"

const BonusInfo = () => (
  <BonusInfoWrapper>
    <BonusContentContainer>
      <h2>Bonus Content</h2>
      <p>
        Haven't had enough? We've got you covered! Daily resources and a themed
        playlist of fun songs are there to support your 30 day journey.{" "}
      </p>
      <p>
        Each day will include a mini playlist of songs to get you in the groove
        as you code! Look out for cool extras in your course emails!
      </p>
    </BonusContentContainer>
    <div>
      <div>
        <PlaylistInfo>
          <PlaylistImage
            src={PlaylistImg}
            alt="Illustrated flamingo wearing headphones with moving music notes in the background"
          />
        </PlaylistInfo>
      </div>
    </div>
  </BonusInfoWrapper>
)

export default BonusInfo

const BonusInfoWrapper = styled(HalfGridContainer)`
  max-width: 1000px;
  margin: auto;
  padding: 40px;
  @media screen and (max-width: 662px) {
    padding: 0 20px 40px 20px;
  }
`

const BonusContentContainer = styled.div`
  margin: auto;
`

const PlaylistInfo = styled.div`
  text-align: center;
`

const PlaylistImage = styled.img`
  width: 100%;
  max-width: 500px;
  @media screen and (min-width: 992px) {
    margin-top: -50px;
  }
`
