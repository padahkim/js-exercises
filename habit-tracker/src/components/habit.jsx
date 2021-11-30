import React, { Component } from 'react';


class Habit extends Component {
  state = {
    count:0,
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1})
  };

  handleDecrement = () => {
    const count = this.state.count;
    
    this.setState({count: count > 0 ? count - 1 : 0 })

    //this.setState({ count: this.state.count > 0 ? this.state.count - 1 : this.state.count === 0})이거 treu or false값임;;
  }

  render() {
    console.log(this.props.habit);
    //const name = this.props.habit.name;
    //const count = this.props.habit.count;
    const { name, count } = this.props.habit;
    return (
    <li className="habit">  
      <span className="habit-name">{name}</span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={this.handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
      <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
        <i className="fas fa-minus-square"></i>
      </button>
      <button className="habit-button habit-delete">
        <i className="fas fa-trash"></i>
      </button>
    </li>
    );
  }
}

export default Habit;