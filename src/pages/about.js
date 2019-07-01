import React from "react"
import SEO from "../components/seo"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"
import About from "../components/AboutPage/About"

const AboutPage = () => (
  <Wrapper>
    <Global
      styles={css`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: "Poppins", sans-serif;
        }

        h1 {
          font-weight: 800;
          font-size: 45px;
          margin-bottom: 0;
          @media screen and (max-width: 425px) {
            font-size: 36px;
          }
        }

        h2 {
          font-size: 30px;
          margin-bottom: 10px;
        }

        p {
          font-weight: 300;
          font-size: 21px;
          margin-top: 0;
          @media screen and (max-width: 425px) {
            font-size: 20px;
          }
        }
      `}
    />
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <About />
  </Wrapper>
)

export default AboutPage

const Wrapper = styled.div`
  * {
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }

  body {
    margin: 0;
    font-family: "Poppins", sans-serif;
  }
`
