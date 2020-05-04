import React, { Component } from "react";
import Navbar from './Navbar'
import CounterList from "./counterList";
import Reset from "./Reset";

class App extends Component {
  constructor() {
    super();
    this.onReset = this.onReset.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  state = {
    //list of objects having quantities
    items: [
      {
        id: 6,
        value: 90,
      },
      {
        id: 2,
        value: 2,
      },
      {
        id: 3,
        value: 3,
      },
      {
        id: 4,
        value: 4,
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <Navbar items = {this.state.items}/>
        <Reset onReset={this.onReset} />
        <CounterList
          items={this.state.items}
          onInc={this.increment}
          onDec={this.decrement}
          onDelete={this.onDelete}
        />
      </React.Fragment>
    );
  }

  onReset() {
    const NewItems = this.state.items.map((item) => {
      return { id: item.id, value: 0 };
    });
    console.log(NewItems);
    this.setState({ items: NewItems });
  }

  increment(id) {
    const items = this.state.items.map((item) => {
      if (item.id === id) {
        return {
          id: item.id,
          value: item.value + 1,
        };
      } else {
        return item;
      }
    });

    this.setState({ items });
  }

  decrement(id) {
    const items = this.state.items.map((item) => {
      if (item.id === id) {
        let value = item.value === 0 ? 0 : item.value - 1;
        return {
          id: item.id,
          value: value,
        };
      } else {
        return item;
      }
    });

    this.setState({ items });
  }

  onDelete(id) {
    const items = this.state.items.filter((item) => item.id !== id);
    this.setState({ items });
  }
}

export default App;
