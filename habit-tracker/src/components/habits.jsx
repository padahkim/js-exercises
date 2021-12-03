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

  return (
    <ul>
      {state.habits.map((habit)=><Habit habit={habit} key={habit.id}/>)}
    </ul>
  )
}
