import React, { memo, useEffect } from 'react';

const Habit = memo (props => {
  const { name, count } = props.habit;

  useEffect(() => {
    console.log(`mounted & updated!: }`);
  },[]);
  
  const handleIncrement = () => {
    props.onIncrement(props.habit);
  };

  const handleDecrement = () => {
    props.onDecrement(props.habit);
  };

  const handleDelete = () => {
    props.onDelete(props.habit);
  };
  
  return (
    <li className="habit">
      <span className="habit-name">{name}</span>
      <span className="habit-count">{count}</span>
      <button
        className="habit-button habit-increase"
        onClick={handleIncrement}
      >
        <i className="fas fa-plus-square"></i>
      </button>
      <button
        className="habit-button habit-decrease"
        onClick={handleDecrement}
      >
        <i className="fas fa-minus-square"></i>
      </button>
      <button
        className="habit-button habit-delete"
        onClick={handleDelete}
      >
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );}
);

export default Habit;
