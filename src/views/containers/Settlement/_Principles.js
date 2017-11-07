import React, { Component } from "react"
import PropTypes from "prop-types"
import { ModalFooter, Button } from "reactstrap"

import NumberIncrement from "views/components/NumberIncrement/NumberIncrement"
import Stat from "views/components/Stats/Stats"
import WidgetVariant from "views/components/Widget/WidgetVariant"

class Principles extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggleModal: false,
      title: "Principles",
      amount: props.amount
    }
  }

  handleModal = () => {
    this.setState({
      toggleModal: !this.state.toggleModal
    })
  }

  handleCancel = () => {
    this.setState({
      amount: this.props.amount
    })
    this.handleModal()
  }

  handleConfirm = () => {
    this.handleModal()
  }

  updateAmount = (amount) => {
    this.setState({ amount })
  }

  render() {
    return (
      <WidgetVariant title={this.state.title} toggleModal={this.state.toggleModal} myClass={"principles"} >
        {/* This is in the widget */}
        <Stat amount={this.state.amount} />

        {/* This is in the modal */}
        <NumberIncrement amount={this.state.amount} min={1} updateAmount={this.updateAmount} />

        <ModalFooter>
          <Button color={this.state.amount === this.props.amount ? 'light' : 'primary' } onClick={this.handleModal}>
            Confirm
          </Button>
          <Button onClick={this.handleCancel} color="link">
            Cancel
          </Button>
        </ModalFooter>

      </WidgetVariant>
    )
  }
}

Principles.propTypes = {
  amount: PropTypes.number
}

Principles.defaultProps = {
  amount: 0
}

export default Principles
