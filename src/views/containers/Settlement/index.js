import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import PropTypes from "prop-types"
import { Row, Col } from "reactstrap"

import Innovations from "./_Innovations"
import SurvivalLimit from "./_SurvivalLimit"
import LanternYear from "./_Year"
import Population from "./_Population"
import Principles from "./_Principles"
import Milestones from "./_Milestones"
import Locations from "./_Locations"
import DeathCount from "./_Deaths"
import DefeatedMonsters from "./_Monsters"
import Notes from "../Settlement/_Notes"

import Header from "views/components/Header"
import Widget from "views/components/Widget/Widget"
import LoadingSpinner from "views/components/LoadingSpinner/LoadingSpinner"

import { getSettlement } from "core/settlement"

class Settlement extends React.Component {
  componentDidMount() {
    // Grabs any current settlement data that we might have
    const currentSettlement = this.props.settlementData
    const id = this.props.params.oid
    if (currentSettlement === null || currentSettlement.sheet._id.$oid !== id) {
      this.props.getSettlement(id)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.settlementData && this.props.settlementData === null) {
      this.setState({
        settlement: nextProps.settlementData
      })
    }
  }

  render() {
    if (this.props.settlementData) {
      return (
        <div>
          <Header name={this.props.settlementData.sheet.name} />
          <div className="layout layout--settlement">
            <SurvivalLimit
              amount={this.props.settlementData.sheet.survival_limit}
            />
            <LanternYear
              amount={this.props.settlementData.sheet.lantern_year}
            />
            <Population amount={this.props.settlementData.sheet.population} />

            <Innovations list={this.props.settlementData.sheet.innovations} />

            <Principles
              amount={this.props.settlementData.sheet.principles.length}
            />

            <Milestones
              amount={
                this.props.settlementData.sheet.milestone_story_events.length
              }
            />

            <Locations
              amount={this.props.settlementData.sheet.locations.length}
            />

            <DeathCount amount={this.props.settlementData.sheet.death_count} />

            <DefeatedMonsters
              amount={this.props.settlementData.sheet.defeated_monsters.length}
            />

            <Notes />
          </div>
        </div>
      )
    }
    return <LoadingSpinner />
  }
}

function mapStateToProps(state) {
  return {
    settlementData: state.settlementData
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getSettlement
    },
    dispatch
  )
}

Settlement.propTypes = {
  getSettlement: PropTypes.func,
  params: PropTypes.shape({
    oid: PropTypes.string.isRequired
  }),
  settlementData: PropTypes.shape({
    sheet: PropTypes.object,
    user_assets: PropTypes.object
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Settlement)
