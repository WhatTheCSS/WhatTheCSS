import React from "react"
import styled from "@emotion/styled"
import { colors } from "../../ReusableComponents/colors"

const Profile = ({ profile }) => (
  <ProfileWrapper>
    <ProfileImgContainer className="profile-img-container">
      <img src={profile.image} alt={profile.alt} />
    </ProfileImgContainer>
    <ProfileName className="profile-name">{profile.name}</ProfileName>
    <ProfileTitle className="profile-title">{profile.title}</ProfileTitle>
    <ProfilePronouns className="profile-pronouns">
      {profile.pronouns}
    </ProfilePronouns>
    <ProfileBio className="profile-bio">{profile.bio}</ProfileBio>
    <ProfileIcons className="profile-icons">
      {profile.links
        ? profile.links.map((link, index) => (
            <a key={index} href={link[0]} target="_blank">
              <img src={link[1]} alt={link[2]} />
            </a>
          ))
        : null}
    </ProfileIcons>
  </ProfileWrapper>
)

export default Profile

const ProfileWrapper = styled.div`
  text-align: center;
  margin: 0;
  width: 100%;
  margin-bottom: 70px;
  flex: 0 0 calc(24.66%);
  @media screen and (max-width: 992px) {
    flex: 0 0 100%;
  }
  @media screen and (max-width: 992px) {
    margin-bottom: 40px;
  }
  @media screen and (max-width: 662px) {
    width: 100%;
  }
  &:first-of-type ${ProfileIcons} a {
    background-color: ${colors.teal};
  }
  &:nth-of-type(2) ${ProfileIcons} a {
    background-color: ${colors.orange};
  }
  &:nth-of-type(3) ${ProfileIcons} a {
    background-color: ${colors.red};
  }
  &:nth-of-type(4) ${ProfileIcons} a {
    background-color: ${colors.purple};
  }
`
const ProfileImgContainer = styled.div`
  margin: 0 auto;
  height: 160px;
  img {
    max-width: 160px;
    vertical-align: middle;
  }
`

const ProfileName = styled.h2`
  font-size: 22px;
  text-align: center;
  margin-bottom: 0;
  margin-top: 20px;
`

const ProfileTitle = styled.p`
  font-size: 15px;
  text-align: center;
  margin-bottom: 0;
`

const ProfilePronouns = styled.p`
  font-size: 16px;
  margin: 0 auto;
`

const ProfileBio = styled.div`
  font-size: 13px;
  text-align: center;
  margin-bottom: 20px;
  font-style: italic;
  img {
    height: 20px;
    margin-left: 7px;
    margin-bottom: 0;
  }
`
const ProfileIcons = styled.div`
  text-align: center;
  margin: auto;
  display: flex;
  justify-content: center;
  a {
    margin-right: 10px;
  }
  a:last-of-type {
    margin-right: 0;
  }
  a {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    padding: 9px 10px;
  }
`
