import React, { Component } from "react";
import PropTypes from "prop-types";
import { ModalFooter, Button } from "reactstrap";
import NumberIncrement from "views/components/NumberIncrement/NumberIncrement";
import Stat from "views/components/Stats/Stats";
import WidgetVariant from "views/components/Widget/WidgetVariant";

class LanternYear extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleModal: false,
      title: "Lantern Year",
      amount: props.amount
    };
  }
  handleModal = () => {
    this.setState({
      toggleModal: !this.state.toggleModal
    });
  }
  handleCancel = () => {
    this.setState({
      amount: this.props.amount
    });
    this.handleModal();
  }
  handleConfirm = () => {
    // dispatches data to api to save
    this.handleModal();
  }
  updateAmount = (amount) => {
    console.log(`Amount changed to ${amount}`);
    this.setState({ amount });
  }

  renderConfirm() {
    if (this.state.amount === this.props.amount) {
      return (
        <Button color="light" onClick={this.handleModal}>
          Confirm
        </Button>
      );
    }
    return (
      <Button color="primary" onClick={this.handleModal}>
        Confirm
      </Button>
    );
  }
  
  render() {
    return (
      <WidgetVariant
        title={this.state.title}
        toggleModal={this.state.toggleModal}
        myClass={"lanternYear"}
      >
        {/* This is in the widget */}
        <Stat amount={this.state.amount} />
        {/* This is in the modal */}
        <NumberIncrement
          amount={this.state.amount}
          min={1}
          updateAmount={this.updateAmount}
        />
        <ModalFooter>
          {this.renderConfirm()}
          <Button onClick={this.handleCancel} color="link">
            Cancel
          </Button>
        </ModalFooter>
      </WidgetVariant>
    );
  }
}

LanternYear.propTypes = {
  amount: PropTypes.number
};

LanternYear.defaultProps = {
  amount: 0
};

export default LanternYear;
