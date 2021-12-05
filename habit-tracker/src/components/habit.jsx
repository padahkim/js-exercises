import React, { Component } from 'react'

class Habit extends Component {
  
  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    const {title, count} = this.props.habit;
    return (
    <>
    <li className="habit">
      <span className="habit-name">{title}</span>
      <span className="habit-count">{count}</span>
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
//위에것들은 원래 안되는 것들이었슴.onClick={this.props.onIncrement(this.props.habit)}이건 왜 안될까...