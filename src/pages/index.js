import React from "react"
import { graphql } from "gatsby"

import { css, Global } from "@emotion/core"

import Layout from "../components/layout"
import SEO from "../components/seo"

  const globalStyles = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    html,
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Roboto Light", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
        "Segoe UI Symbol";
    }
  `
  const main = css`
    font-size: 1.5em;
    color: #ff79c6;
    margin-bottom: 0.5em;
  `


class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
      <Global styles={globalStyles} />
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        
        <main  css={main}>
          THIS IS THE HOMEPAGE
        </main>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
