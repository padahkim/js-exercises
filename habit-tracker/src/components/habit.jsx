import React, { useState } from 'react'

function Habit (props) {
  const [count, setCount] = useState(0);
  let currentCount = count;

  function handleIncrement() {
    currentCount+= 1;
    setCount(currentCount)
  }
  function handleDecrement() {
    currentCount = currentCount > 0 ? currentCount - 1: 0
    setCount(currentCount)
  }

    return (
    <>
    <li className="habit">
      <span className="habit-name">{props.habit.name}</span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
      <button className="habit-button habit-decrease" onClick={handleDecrement}>
        <i className="fas fa-minus-square"></i>
      </button>
      <button className="habit-button habit-delete">
        <i className="fas fa-trash"></i>
      </button>
    </li>
    </>
    );
}

export default Habit;
//onClick={()=>setCount(count-1)}