import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import PropTypes from "prop-types"
import { Row, Col, Card } from 'antd'

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

import { getSettlement, updateSettlement } from "core/settlement"

class Settlement extends React.Component {

  componentDidMount() {
    const { settlementId, getSettlement } = this.props
    getSettlement(settlementId)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.settlement && this.props.settlement === null) {
      this.setState({
        settlement: nextProps.settlement
      })
    }
  }

  render() {
    const { settlement, settlementId, updateSettlement } = this.props
    if (settlement) {
      return (
        <div>
          <Row>
            <Col span={8}>
              <Card title="Survival Limit">
                <SurvivalLimit
                  settlementId={settlementId}
                  amount={settlement.survival_limit}
                  onUpdate={updateSettlement}
                />
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Settlement Name"><Header name={settlement.name} /></Card>
            </Col>
            <Col span={8}>
              <Card title="Death Count"><DeathCount amount={settlement.death_count} /></Card>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Card><LanternYear amount={settlement.lantern_year} /></Card>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Card><Milestones amount={settlement.milestone_story_events.length} /></Card>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Card><Innovations list={settlement.innovations} /></Card>
            </Col>
            <Col span={12}>
              <Card><Locations amount={settlement.locations.length} /></Card>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Card><Principles amount={settlement.principles.length} /></Card>
            </Col>
            <Col span={12}>
              <Card>{/* Quarries */}</Card>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Card>{/* Resource Storage */}</Card>
            </Col>
            <Col span={12}>
              <Card>{/* Gear Storage */}</Card>
            </Col>
          </Row>

          <Row>
            <Col span={8}>
              <Card>{/* Nemesis Monsters */}</Card>
            </Col>
            <Col span={8}>
              <Card>{/* Lantern Research Level */}</Card>
            </Col>
            <Col span={8}>
              <Card><Notes /></Card>
            </Col>
          </Row>

          <Row>
            <Col span={12}>
              <Card><Population amount={settlement.population} /></Card>
            </Col>
            <Col span={12}>
              <Card>{/* Lost Settlements */}</Card>
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <Card>{/* survivors */}</Card>
            </Col>
          </Row>
        </div>
      )
    }
    return <LoadingSpinner />
  }
}

function mapStateToProps(state, props) {
  return {
    settlementId: props.match.params.oid,
    settlement: state.settlement.item
  }
}

Settlement.propTypes = {
  getSettlement: PropTypes.func,
  params: PropTypes.shape({
    oid: PropTypes.string.isRequired
  }),
  settlement: PropTypes.shape({
    sheet: PropTypes.object,
    user_assets: PropTypes.object
  })
}

export default connect(
  mapStateToProps,
  {
    getSettlement,
    updateSettlement
  }
)(Settlement)
