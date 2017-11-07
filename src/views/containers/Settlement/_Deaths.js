import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { times } from 'lodash'
import { Checkbox } from 'antd'

class DeathCount extends Component {
  onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  }

  render() {
    const { amount } = this.props

    return (
      <div>
        {times(amount, d => <Checkbox key={d} defaultChecked disabled className='deathbox' />)}
        <Checkbox onChange={this.onChange} className='deathbox' />
      </div>
    )
  }
}

DeathCount.propTypes = {
  amount: PropTypes.number
}

DeathCount.defaultProps = {
  amount: 0
}

export default DeathCount
