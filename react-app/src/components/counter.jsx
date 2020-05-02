import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.increment = this.increment.bind(this);
  }
  state = {
    count: 1,
    url: "https://picsum.photos/200",
  };
  render() {
    return (
      <div>
        <span style={{ fontSize: 10 }} className={this.getCountClasses()}>
          {this.formatCount()}
        </span>
        <button onClick={this.increment} className="btn btn-secondary btn-sm">
          Increment
        </button>
      </div>
    );
  }
  increment() {
    this.setState({ count: this.state.count + 1 });
  }
  getCountClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const count = this.state.count;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
