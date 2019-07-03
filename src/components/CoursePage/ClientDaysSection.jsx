import React from "react"
import styled from "@emotion/styled"
import MascotGroupImg from "../../imgs/course/mascot-group.svg"
import ClientDaysContent from "./ClientDaysContent"

const ClientDaysSection = () => (
  <div>
    <h2>Client Days</h2>
    <p>
      Create a new Mascot Co blog, update the Mascot Co. website, build a form
      for the Mascot Co annual hackathon and more!
    </p>
    <p>
      The Mascot Co. team will bring along new project requirements,
      limitations, and their quirky personalities. By day 30 you will have a
      variety of completed content to share!
    </p>
    <ClientDaysBanner>
      <img
        src={MascotGroupImg}
        alt="Image of a group of animals dressed like people including a black cat, a bulldog, a fox, a bunny and a flamingo"
      />
    </ClientDaysBanner>
    <ClientDaysContent />
  </div>
)

export default ClientDaysSection

const ClientDaysBanner = styled.div`
  position: relative;
  z-index: 0;
  margin: 50px auto;
  img {
    max-height: 400px;
    display: block;
    margin: auto;
    width: 100%;
  }
`
