import React, { Component } from 'react';

class Navbar extends Component {
    state = {  }
    render() { 
        return (
            <nav className="navbar navbar-light bg-light">
                <div className="navbar-brand">Total <span className="badge badge-success">{this.getTotal()}</span></div>
            </nav>
          );
    }
    getTotal(){
        let sum = 0;
        this.props.items.forEach(item => {
            sum += item.value
        });
        return sum
    }
}
 
export default Navbar;