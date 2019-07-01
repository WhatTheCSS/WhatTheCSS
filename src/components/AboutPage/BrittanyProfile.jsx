import React from "react"
import BrittanyImg from "../../imgs/about/brittany.png"
import BrittanyEmoji from "../../imgs/about/woman-tipping-hand-emoji.png"
import LinkIcon from "../../imgs/other/link.svg"
import TwitterIcon from "../../imgs/other/twitter.svg"
import LinkedInIcon from "../../imgs/other/linkedin-in.svg"

const BrittanyProfile = () => (
  <div className="profile">
    <div className="profile-img-container">
      <img
        src={BrittanyImg}
        alt="Illustrated headshot of a black cat wearing a sweater"
      />
    </div>
    <h2 className="profile-name">Brittany Walker</h2>
    <p className="profile-title">Founder & Developer</p>
    <p className="profile-pronouns">she/her</p>
    <div className="profile-bio">
      I like theater more than you
      <img src={BrittanyEmoji} alt="woman tipping hand emoji" />
    </div>
    <div className="profile-icons">
      <a href="https://musicalwebdev.com" target="_blank">
        <img src={LinkIcon} alt="link" />
      </a>
      <a href="https://twitter.com/musicalwebdev?lang=en" target="_blank">
        <img src={TwitterIcon} alt="Twitter" />
      </a>
      <a href="www.linkedin.com/in/brittanyrwalker" target="_blank">
        <img src={LinkedInIcon} alt="LinkedIn" />
      </a>
    </div>
  </div>
)

export default BrittanyProfile
