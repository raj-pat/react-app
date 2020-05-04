import React, { Component } from "react";
import Counter from "./counter";
class CounterList extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.items.map((item) => (
          <Counter
            key={item.id}
            id={item.id}
            value={item.value}
            onInc={this.props.onInc}
            onDec={this.props.onDec}
            onDelete={this.props.onDelete}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default CounterList;
