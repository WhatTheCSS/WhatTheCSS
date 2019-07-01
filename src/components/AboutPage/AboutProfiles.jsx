import React from "react"
import styled from "@emotion/styled"
import BrittanyProfile from "./BrittanyProfile"
import { profileData } from "./profileData"
import Profile from "./Profile"

const AboutProfiles = () => (
  <AboutProfilesWrapper>
    {/*for every item in array, print out a profile component*/}
    {profileData.map((profile, index) => (
      <Profile key={index} profile={profile} />
    ))}
  </AboutProfilesWrapper>
)

export default AboutProfiles

const AboutProfilesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media screen and (max-width: 425px) {
    margin-bottom: 100px;
  }
`
