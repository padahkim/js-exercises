import React from 'react'

function Habit (props) {
  const {name, count} = props.habit;

  function handleDecrement() {
    props.onDecrement(props.habit);
  }

  const onDelete = () => {
    props.onDelete(props.habit);
  }

    return (
    <>
    <li className="habit">
      <span className="habit-name">{name}</span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={() => props.onIncrement(props.habit)}>
        <i className="fas fa-plus-square"></i>
      </button>
      <button className="habit-button habit-decrease" onClick={handleDecrement}>
        <i className="fas fa-minus-square"></i>
      </button>
      <button className="habit-button habit-delete" onClick={onDelete}>
        <i className="fas fa-trash"></i>
      </button>
    </li>
    </>
    );
}

export default Habit;