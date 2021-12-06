import React from 'react'
import Habit from './habit'
import HabitAddForm from './habitAddForm'

export default function Habits(props) {

  function handleDecrement(habit) {
    props.onDecrement(habit)
  }

  const handleDelete = (habit) => {
    props.onDelete(habit)
  }

  return (
    <>
    <HabitAddForm 
    onAdd={props.onAdd}
    />
    <ul>
      {props.habits.map((habit)=>
      <Habit 
      habit={habit} 
      key={habit.id}
      onIncrement={(habit)=>props.onIncrement(habit)}
      onDecrement={handleDecrement}
      onDelete={handleDelete}
      />)}
    </ul>
    <button className="habits-reset" onClick={props.onReset}>Reset</button>
    </>
  )
}
