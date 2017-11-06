import React, { Component } from "react"
import PropTypes from "prop-types"

import Nav from "views/components/Nav"

class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageName: "Page Name"
    }
  }

  renderChildren() {
    return React.Children.map(this.props.children, child => {
      return React.cloneElement(this.props.children, {
        userData: this.props.userData
      })
    })
  }

  render() {
    return (
      <div className="app">
        <Nav />

        <main className="main">{this.renderChildren()}</main>
      </div>
    )
  }
}
export default Landing
