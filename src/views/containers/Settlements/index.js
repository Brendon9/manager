import React from "react"
import { Button } from "reactstrap"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import history from 'utils/history'

import Header from "views/components/Header"
import Icon from "views/components/Icon"
import CardList from "views/components/CardList/CardList"
import LoadingSpinner from "views/components/LoadingSpinner/LoadingSpinner"
import { setCurrentSettlement } from "core/user"

class Settlements extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleSetRedirect = this.handleSetRedirect.bind(this)
  }
  handleSetRedirect(id) {
    console.log("id", id)
    setCurrentSettlement(id)
      .then(res => {
        console.log("res", res)
      })
      .catch(err => {
        console.log("err", err)
      })
    history.push(`/settlements/${id}`)
  }
  renderSettlements() {
    if (this.props.userData && this.props.userData.dashboard) {
      return this.props.userData.dashboard.settlements.map(settlement => {
        return (
          // <CardList
          //   name={settlement.sheet.name}
          //   desc={settlement.sheet.campaign}
          //   action={() => this.handleSetRedirect(settlement.sheet._id.$oid)}
          //   key={settlement.sheet._id.$oid}
          //   meta={[
          //     { label: "Year", value: settlement.sheet.lantern_year },
          //     { label: "Population", value: settlement.sheet.population },
          //     { label: "Expansions", value: settlement.sheet.expansions.length }
          //   ]}
          // />
          <CardList
            name={settlement.$oid}
            action={() => this.handleSetRedirect(settlement.$oid)}
            key={settlement.$oid}
          />
        )
      })
    }
    return <LoadingSpinner />
  }
  render() {
    return (
      <div>
        <Header name={"Settlements"} back="/more">
          <Link to={"/settlements/create"} className="header-action">
            <Icon name={"plus"} />
          </Link>
        </Header>
        <div className="layout">{this.renderSettlements()}</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { userData: state.userData }
}

export default connect(mapStateToProps, null)(Settlements)
