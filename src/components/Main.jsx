import React from "react"
import Nav from "./Nav"
import Hero from "./Hero"
import Home from "./HomePage/Home"
import About from "./AboutPage/About"
//TODO: Apply conditional statements and routing to other Pages
//TODO: Add props to nav depending on current Page
const Main = () => (
  <>
    <Hero />
    <Home />
  </>
)

export default Main
