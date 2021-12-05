import React, { useState }from 'react'
import Habit from './habit'

export default function Habits() {
  const [state, setState] = 
  useState({
    habits:[
    {id:1, name:"Running", count:0},
    {id:2, name:"Heating", count:0},
    {id:3, name:"Dating", count:0},
  ]});

  const handelIncrement = (habit) => {
    const habits = [...state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    setState({habits:habits})
  }

  function handleDecrement(habit) {
    const habits = [...state.habits];
    const index = habits.indexOf(habit);
    let count = habits[index].count
    habits[index].count = count > 1 ? count -1 : 0;
    setState({habits})
  }

  const handleReset = (habit) => {
    const habits = state.habits.filter((item)=>habit.id!==item.id)
    setState({habits})
  }

  return (
    <ul>
      {state.habits.map((habit)=>
      <Habit 
      habit={habit} 
      key={habit.id}
      onIncrement={handelIncrement}
      onDecrement={handleDecrement}
      onReset={handleReset}
      />)}
    </ul>
  )
}
