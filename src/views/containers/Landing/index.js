import React, { Component } from "react"
import PropTypes from "prop-types"

import Nav from "views/components/Nav"

class Landing extends Component {

  render() {
    return (
      <div className="app">
        <Nav />

        <main className="main">
          { this.props.children }
        </main>
      </div>
    )
  }
}

export default Landing
