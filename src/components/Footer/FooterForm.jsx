import React from "react"
import styled from "@emotion/styled"
import { YellowButton } from "../../ReusableComponents/buttons"
import MascotCatImg from "../../imgs/other/WTCSS_mascot_cat_cropped.png"
import { colors } from "../../ReusableComponents/colors"

const FooterForm = () => (
  <FooterFormWrapper>
    <img src={MascotCatImg} alt="" />
    <FooterFormContent>
      <h2>Are you ready?</h2>
      <p>Sign up now to be notifed when the course has launched!</p>
      <YellowButton href="http://eepurl.com/dhmwZr">Sign Up</YellowButton>
    </FooterFormContent>
  </FooterFormWrapper>
)

export default FooterForm

const FooterFormWrapper = styled.section`
  background-color: white;
  padding: 20px 30px;
  max-width: 700px;
  margin: auto;
  position: relative;
  img {
    position: absolute;
    bottom: 0;
    height: 350px;
  }
  @media screen and (max-width: 662px) {
    img {
      position: relative;
      display: block;
      margin: auto;
      height: 300px;
      left: 0;
      margin-top: -100px;
    }
  }
`

const FooterFormContent = styled.div`
  margin-left: 230px;
  max-width: 500px;
  a {
    margin: 40px 0 0 0;
  }
  h2 {
    color: ${colors.blue};
    margin-top: 20px;
    margin-bottom: 0;
  }
  p {
    color: ${colors.blue};
    margin-top: 10px;
  }
  @media screen and (max-width: 662px) {
    padding: 20px;
    margin-left: 0;
    text-align: center;
  }
`
