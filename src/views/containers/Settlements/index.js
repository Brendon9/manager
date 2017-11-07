import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import history from 'utils/history'

import Header from 'views/components/Header'

import { Card, Icon, Row, Col } from 'antd';
import { getSettlementList } from 'core/settlement'

class Settlements extends Component {

  componentDidMount() {
    this.props.getSettlementList()
  }

  handleSetRedirect = (id) => {
    history.push(`/settlements/${id}`)
  }

  render() {
    const { settlements } = this.props

    return (
      <div>

        <Row>
          {settlements.map(settlement => {
            return (
              <Col span={4}>
                <Link to={`/settlements/${settlement.id}`}>
                  <Card title={settlement.name} style={{height: '250px'}}>
                    <p>Lantern Year: {settlement.lantern_year}</p>
                  </Card>
                </Link>
              </Col>
            )
          })}
        </Row>

        <Row>
          <Col span={4}>
            <Card style={{height: '250px'}}>
              <Link to="/settlements/create">
                <Icon type='plus-circle-o' />
              </Link>
            </Card>
          </Col>
        </Row>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  settlements: state.settlement.list
})

export default connect(mapStateToProps, {
  getSettlementList
})(Settlements)
