import React from "react"
import { Link } from "gatsby"
import WspolnaPogonLogo from "../assets/images/logo.png"

export default () => (
  <div className="container logo">
    <Link to="/">
      <img src={WspolnaPogonLogo} alt="logo" />
    </Link>
  </div>
)
