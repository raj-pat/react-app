import React, { Component } from "react";

class Reset extends Component {
  render() {
    return (
      <button
        className="btn btn-primary m-2 btn-sm p-1"
        onClick={this.props.onReset}
      >
        Reset
      </button>
    );
  }
}

export default Reset;
