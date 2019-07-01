import React from "react"
import BrittanyImg from "../../imgs/about/brittany.png"
import RebeccaImg from "../../imgs/about/rebecca-2.png"
import DevonImg from "../../imgs/about/devon.png"
import NathanImg from "../../imgs/about/nathan.png"
import RenlyImg from "../../imgs/about/renly-headshot@2x.png"
import IpaImg from "../../imgs/about/ipa-headshot@2x.png"
import BrittanyEmoji from "../../imgs/about/woman-tipping-hand-emoji.png"
import RebeccaEmoji from "../../imgs/about/grapefruit.png"
import DevonEmoji from "../../imgs/about/sunglasses-emoji.png"
import NathanEmoji from "../../imgs/about/hand-sign-emoji.png"
import RenlyEmoji from "../../imgs/about/crown-emoji.png"
import LinkIcon from "../../imgs/other/link.svg"
import TwitterIcon from "../../imgs/other/twitter.svg"
import InstagramIcon from "../../imgs/other/instagram.svg"
import LinkedInIcon from "../../imgs/other/linkedin-in.svg"

export const profileData = [
  {
    image: BrittanyImg,
    alt: "Illustrated headshot of a black cat wearing a sweater",
    name: "Brittany Walker",
    title: "Founder & Developer",
    pronouns: "she/her",
    bio: (
      <>
        I like theater more than you
        <img src={BrittanyEmoji} alt="woman tipping hand emoji" />
      </>
    ),
    links: [
      ["https://musicalwebdev.com", LinkIcon, "website"],
      ["https://twitter.com/musicalwebdev?lang=en", TwitterIcon, "Twitter"],
      ["www.linkedin.com/in/brittanyrwalker", LinkedInIcon, "LinkedIn"],
    ],
  },
  {
    image: RebeccaImg,
    alt: "Illustrated headshot of a flamingo wearing a blue t-shirt",
    name: "Rebecca Price",
    title: "Graphic Designer",
    pronouns: "she/her",
    bio: (
      <>
        Unironic La Croix lover
        <img src={RebeccaEmoji} alt="grapefruit la croix can" />
      </>
    ),
    links: [
      ["http://rebeccaprice.me/", LinkIcon, "link"],
      ["https://twitter.com/rebeccuhhhh?lang=en", TwitterIcon, "Twitter"],
      [
        "https://www.instagram.com/rebeccuhhhhh/?hl=en",
        InstagramIcon,
        "Instagram",
      ],
    ],
  },
  {
    image: DevonImg,
    alt:
      "Illustrated headshot of a fox wearing a monocle and a striped t-shirt",
    name: "Devon Charles",
    title: "Founder & UX Designer",
    pronouns: "he/him",
    bio: (
      <>
        Unamused but patient
        <img src={DevonEmoji} alt="face with sunglasses emoji" />
      </>
    ),
    links: [
      ["https://twitter.com/devoncharles22", TwitterIcon, "Twitter"],
      ["https://www.linkedin.com/in/devoncharles22/", LinkedInIcon, "LinkedIn"],
    ],
  },
  {
    image: NathanImg,
    alt: "Illustrated headshot of a bunny wearing a bowtie and glasses",
    name: "Nathan León",
    title: "Front-End Developer",
    pronouns: "he/him",
    bio: (
      <>
        <img src={NathanEmoji} alt="rock hand emoji" />
        Eat, cry, love
        <img src={NathanEmoji} alt="rock hand emoji" />
      </>
    ),
    links: [
      ["https://nathancleon.com/", LinkIcon, "link"],
      ["https://twitter.com/nathancleon", TwitterIcon, "Twitter"],
      ["https://www.linkedin.com/nathancleon", LinkedInIcon, "LinkedIn"],
    ],
  },
  {
    image: RenlyImg,
    alt: "Illustrated headshot Renly, Nathan's dog",
    name: "Renly León",
    title: "Bork of Directors",
    bio: (
      <>
        First of his name
        <img src={RenlyEmoji} alt="crown emoji" />
      </>
    ),
  },
  {
    image: IpaImg,
    alt: "Illustrated headshot of Ipa, Rebeccas dog",
    name: "Ipa Price",
    title: "Bork of Directors",
    bio: <>Shy but loud</>,
  },
]
