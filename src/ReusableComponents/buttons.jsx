import styled from "@emotion/styled"
import { colors } from "./colors"

export const Button = styled.a`
  display: block;
  width: 100%;
  padding: 15px;
  text-decoration: none;
  text-align: center;
  font-weight: 600;
  font-size: 21px;
  margin: 40px auto 0 auto;
  max-width: 350px;
  transition-timing-function: ease-in-out;
  transition: 0.2s;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 425px) {
    margin: 20px auto 0 auto;
  }
  &:hover {
    transform: translateY(-10px);
    transition: 0.2s;
    transition-timing-function: ease-in-out;
    box-shadow: 5px 5px white;
  }
`

export const RedButton = styled(Button)`
  background-color: ${colors.red};
  color: ${colors.white};
  transition: 0.2s;
  &:hover,
  &:focus,
  &:active {
    transition: 0.2s;
    box-shadow: 5px 5px ${colors.yellow};
  }
`

export const YellowButton = styled(Button)`
  background-color: ${colors.yellow};
  color: ${colors.blue};
  &:hover,
  &:focus,
  &:active {
    transition: 0.2s;
    box-shadow: 5px 5px ${colors.blue};
  }
`

export const TealButton = styled(Button)`
  background-color: ${colors.teal};
  color: ${colors.white};
  &:hover,
  &:focus,
  &:active {
    transition: 0.2s;
    box-shadow: 5px 5px ${colors.green};
  }
`

export const GreenButton = styled(Button)`
  background-color: ${colors.green};
  color: ${colors.blue};
  &:hover,
  &:focus,
  &:active {
    transition: 0.2s;
    box-shadow: 5px 5px ${colors.teal};
  }
`

export const BlueButton = styled(Button)`
  background-color: ${colors.blue};
  color: ${colors.white};
  &:hover,
  &:focus,
  &:active {
    transition: 0.2s;
    box-shadow: 5px 5px ${colors.yellow};
  }
`
