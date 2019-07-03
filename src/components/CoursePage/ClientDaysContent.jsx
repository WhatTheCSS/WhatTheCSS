import React from "react"
import styled from "@emotion/styled"
import { colors } from "../../ReusableComponents/colors"
import FlamingoImg from "../../imgs/course/flamingo.svg"
import BulldogImg from "../../imgs/course/bulldog.svg"
import FoxImg from "../../imgs/course/fox.svg"
import BunnyImg from "../../imgs/course/bunny.svg"
import CatImg from "../../imgs/course/cat.svg"
import CoffeeClientImg from "../../imgs/course/coffeeclient.png"

const ClientDaysContent = () => (
  <ClientDaysContentWrapper>
    <h2>Meet the Staff</h2>
    <p>Each Client Day will introduce a new Mascot Co. team member. </p>
    <ClientDaysCards>
      <SingleClientDay>
        <SingleClientDayContent>
          <h3>Client Day 1</h3>
          <img src={FlamingoImg} alt="a painter's palette with a paint brush" />
          <h4>Work With</h4>
          <p>Flamingo Fonts, Graphic Designer</p>
          <h4>Work On</h4>
          <p>Branding & Style</p>
        </SingleClientDayContent>
      </SingleClientDay>
      <SingleClientDay>
        <SingleClientDayContent>
          <h3>Client Day 2</h3>
          <img src={BulldogImg} alt="a marketing slide with a graph" />
          <h4>Work With</h4>
          <p>Bulldog Style, Marketing Strategist</p>
          <h4>Work On</h4>
          <p>Existing Page Redesign</p>
        </SingleClientDayContent>
      </SingleClientDay>
      <SingleClientDay>
        <SingleClientDayContent>
          <h3>Client Day 3</h3>
          <img src={FoxImg} alt="a monocle with a chain" />
          <h4>Work With</h4>
          <p>Fox Frame, UX Developer</p>
          <h4>Work On</h4>
          <p>Layout Reorganization</p>
        </SingleClientDayContent>
      </SingleClientDay>
      <SingleClientDay>
        <SingleClientDayContent>
          <h3>Client Day 4</h3>
          <img src={BunnyImg} alt="a bow tie" />
          <h4>Work With</h4>
          <p>Bunny Grid, Event Director</p>
          <h4>Work On</h4>
          <p>Create Forms</p>
        </SingleClientDayContent>
      </SingleClientDay>
      <SingleClientDay>
        <SingleClientDayContent>
          <h3>Client Day 5</h3>
          <img
            src={CatImg}
            alt="laptop with a cat image as the desktop background"
          />
          <h4>Work With</h4>
          <p>Cat Less, Software Engineer</p>
          <h4>Work On</h4>
          <p>Build Animations & UI Interactions</p>
        </SingleClientDayContent>
      </SingleClientDay>
      <SingleClientDay>
        <SingleClientDayContent>
          <h3>Client Day 6</h3>
          <img src={CoffeeClientImg} alt="a to-go coffee cup" />
          <h4>Work With</h4>
          <p>All Mascot Co. Staff</p>
          <h4>Work On</h4>
          <p>Build a Brand New Page</p>
        </SingleClientDayContent>
      </SingleClientDay>
    </ClientDaysCards>
  </ClientDaysContentWrapper>
)

export default ClientDaysContent

const ClientDaysContentWrapper = styled.div`
  margin: auto;
  text-align: center;
  @media screen and (max-width: 992px) {
    margin-bottom: 100px;
  }
`

const ClientDaysCards = styled.section`
  @media screen and (min-width: 776px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    row-gap: 20px;
    column-gap: 20px;
  }
`

const SingleClientDay = styled.div`
  display: inline-block;
  background-color: #e5efed;
  color: #263557;
  vertical-align: top;
  margin-bottom: 20px;
  width: 100%;
  max-width: 350px;

  h3,
  h4,
  p {
    margin: 0;
  }

  h3 {
    padding: 10px;
    color: white;
  }

  &:first-child {
    h3 {
      background-color: ${colors.teal};
    }
  }

  &:nth-child(2) {
    h3 {
      background-color: ${colors.red};
    }
  }

  &:nth-child(3) {
    h3 {
      background-color: ${colors.orange};
    }
  }

  &:nth-child(4) {
    h3 {
      background-color: ${colors.purple};
    }
  }

  &:nth-child(5) {
    h3 {
      background-color: ${colors.green};
    }
  }

  &:last-child {
    img {
      width: 37px;
    }
    h3 {
      background-color: ${colors.altBlue};
    }
  }
`
const SingleClientDayContent = styled.div`
  img {
    width: 60px;
    margin: 20px auto 0 auto;
  }

  h4 {
    text-decoration: underline;
  }

  p {
    font-size: 18px;
    margin-bottom: 15px;
  }
`
