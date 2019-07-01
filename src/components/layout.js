/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import HomePage from "./HomePage/HomePage"

const Layout = () => (
  <Wrapper>
    <HomePage />
  </Wrapper>
)
export default Layout

const Wrapper = styled.div`
  width: 100%;
`
