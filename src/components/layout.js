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
import Header from "./header"
import "./layout.css"
import Main from "./HomePage/HomePage"

const Layout = () => (
  <Wrapper>
    <Main />
  </Wrapper>
)
export default Layout
