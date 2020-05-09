import React from "react"

import Header from "./header"
import Menu from "./menu"

import "../assets/style.css"

const Layout = ({ children }) => (
  <>
    <header>
      <Header />
    </header>
    <Menu />
    <main className="container">{children}</main>
    <footer className="container">
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  </>
)

export default Layout
