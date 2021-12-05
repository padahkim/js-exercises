import React from 'react'
import Habit from './habit'

export default function Habits(props) {

  function handleDecrement(habit) {
    props.onDecrement(habit)
  }

  const handleReset = (habit) => {
    props.onReset(habit)
  }

  return (
    <ul>
      {props.habits.map((habit)=>
      <Habit 
      habit={habit} 
      key={habit.id}
      onIncrement={(habit)=>props.onIncrement(habit)}
      onDecrement={handleDecrement}
      onReset={handleReset}
      />)}
    </ul>
  )
}
