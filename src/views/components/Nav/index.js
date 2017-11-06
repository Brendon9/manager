import React, { Component } from "react"
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import PropTypes from "prop-types"
import Icon from "views/components/Icon"

class Nav extends Component {
  getNav() {
    return [
      {
        title: "Settlement",
        icon: "settlement",
        link: `/settlements/${this.props.userData.user.current_settlement.$oid}`
      },
      {
        title: "Survivors",
        icon: "survivors",
        link: `/settlements/${this.props.userData.user.current_settlement.$oid}/survivors/`
      },
      {
        title: "Resources",
        icon: "storage",
        link: `/settlements/${this.props.userData.user.current_settlement.$oid}/storage`
      },
      {
        title: "Campaign Log",
        icon: "log",
        link: `/settlements/${this.props.userData.user.current_settlement.$oid}/log`
      },
      {
        title: "Menu",
        icon: "menu",
        link: "/more"
      }
    ]
  }

  renderMainNav() {
    return this.getNav().map((item, index) => (
      <Link
        key={index}
        className="nav-link"
        to={item.link}
        title={item.title}
      >
        <Icon name={item.icon} />
      </Link>
    ))
  }

  render() {
    return <nav className="mainNav">{this.renderMainNav()}</nav>
  }
}

function mapStateToProps(state) {
  return {
    userData: state.userData
  }
}

export default connect(mapStateToProps, {

})(Nav)
