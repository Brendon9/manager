import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Badge, Button, Icon, Switch } from 'antd'
const ButtonGroup = Button.Group

class SurvivalLimit extends Component {
  increase = () => {
    const { settlementId, onUpdate, amount } = this.props

    onUpdate(settlementId, {survival_limit: amount + 1})
  }

  decline = () => {
    const { settlementId, onUpdate, amount } = this.props
    let count = amount - 1
    if (count < 1) {
      count = 1
    }
    onUpdate(settlementId, {survival_limit: count})
  }

  render() {
    const { amount } = this.props
    return (
      <div>
        <Badge count={amount} style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }} showZero/>
        <ButtonGroup>
          <Button onClick={this.decline}>
            <Icon type='minus' />
          </Button>
          <Button onClick={this.increase}>
            <Icon type='plus' />
          </Button>
        </ButtonGroup>
      </div>
    )
  }
}

SurvivalLimit.propTypes = {
  amount: PropTypes.number
}

SurvivalLimit.defaultProps = {
  amount: 0
}

export default SurvivalLimit
