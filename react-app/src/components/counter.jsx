import React, { Component } from "react";

class Counter extends Component {
  render() {
    console.log();
    return (
      <div>
        <span style={{ fontSize: 10 }} className={this.getCountClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onInc(this.props.id)}
          className="btn btn-secondary btn-sm m-2"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDec(this.props.id)}
          className={this.getDecrementClasses()}
        >
          -
        </button>
        <button
          className="btn-danger btn p-1"
          onClick={() => this.props.onDelete(this.props.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  getCountClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const count = this.props.value;
    return count === 0 ? "Zero" : count;
  }

  getDecrementClasses() {
    let classes = "btn btn-secondary btn-sm m-2 ";
    classes += this.props.value === 0 ? "disabled" : "";
    return classes;
  }
}

export default Counter;
