import React, { Component } from 'react'

class Habit extends Component {

  state = {
    count: 0,
  }

  handleIncrement = () => {
    this.setState({ count:this.state.count+1})
  }

  handleDecrement = () => {
    this.setState({ count:this.state.count > 0 ? this.state.count-1 : 0})
  }

  handleDelete = () => {
  }

  render() {
    console.log(this.props.habit)
    const {title, count} = this.props.habit;
    return (
    <>
    <li className="habit">
      <span className="habit-name">{title}</span>
      <span className="habit-count">{this.state.count}</span>
      <button className="habit-button habit-increase" onClick={this.handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
      <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
        <i className="fas fa-minus-square"></i>
      </button>
      <button className="habit-button habit-delete" onClick={this.handleDelete}>
        <i className="fas fa-trash"></i>
      </button>
    </li>
    </>
    );
  }
}

export default Habit;
//{this.props.name}나의 뇌절코딩1
//{this.state.count}발전된 뇌절- 버튼누르면 화면상에 값이 변함/count값도 잘변함
//{this.props.count}버튼누르면 화면상에 값은 안변함 but props내의 count값은 변함