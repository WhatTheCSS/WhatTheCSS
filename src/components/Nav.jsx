import React from "react"
import styled from "@emotion/styled"
import { colors } from "../ReusableComponents/colors"
import LogoTeal from "../imgs/logos/wtcss_logo_teal.png"

const Nav = ({ home, course, about }) => (
  <Navigation>
    <Logo href="https://www.whatthecss.com">
      <img
        src={LogoTeal}
        alt="What the CSS?! logo of question mark and exclamation point"
      />
    </Logo>
    <NavLinks>
      <NavLink>
        <a href="https://www.whatthecss.com">Home</a>
      </NavLink>
      <NavLink>
        <a href="https://www.whatthecss.com/course">Course</a>
      </NavLink>
      <NavLink>
        <a href="https://www.whatthecss.com/about">About</a>
      </NavLink>
    </NavLinks>
  </Navigation>
)

export default Nav

const Navigation = styled.nav`
  padding: 20px;
  z-index: 9999;
  @media screen and (min-width: 992px) {
    display: inline-block;
    width: 185px;
    position: absolute;
    left: 20px;
    top: -30px;
  }
`

const Logo = styled.a`
  display: block;
  height: 150px;
  margin-bottom: 20px;
  img {
    height: 200px;
    border-radius: 50%;
    border: 3px solid white;
    &:hover {
      border-color: ${colors.teal};
    }
    @media screen and (max-width: 991px) {
      height: 120px;
      display: block;
      margin: 0 auto;
    }
    @media screen and (min-width: 992px) {
      width: 100%;
      height: auto;
    }
  }
`

const NavLinks = styled.ul`
  list-style: none;
  padding: 5px;
  text-align: center;
  @media screen and (min-width: 992px) {
    text-align: left;
    margin-left: 30px;
  }
  @media screen and (max-width: 425px) {
    padding: 0;
    margin: 16px 0 0 0;
  }
`

const NavLink = styled.li`
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 25px;

  a {
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 500;
    position: relative;
    font-size: 20px;
    color: ${colors.black};
    transition: 0.2s;
    margin-right: 10px;
    &:hover {
      transition: 0.35s;
      color: darken(${colors.black}, 20%);
      @media screen and (max-width: 776px) {
        padding-bottom: 10px;
      }
      &:after {
        transition: 0.2s;
      }
      @media screen and (min-width: 776px) {
        &:after {
          width: 145%;
        }
      }
    }
    &:after {
      position: absolute;
      content: "";
      height: 12px;
      width: 100%;
      left: 0;
      z-index: -1;
      bottom: -10px;
      transition: 0.2s;
      @media screen and (min-width: 992px) {
        bottom: -10px;
      }
    }
  }

  &:first-of-type a:after {
    background-color: ${colors.teal};
    transition: 0.2s;
  }
  &:nth-of-type(2) a:after {
    background-color: ${colors.yellow};
  }
  &:nth-of-type(3) a:after {
    background-color: ${colors.red};
  }
  &:nth-of-type(4) a:after {
    background-color: ${colors.green};
  }
  &:last-of-type a:after {
    margin-right: 0;
  }
`
