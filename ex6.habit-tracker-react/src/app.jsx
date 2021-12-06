import React, { useRef, useState } from 'react';
import './app.css';
import Habits from'./components/habits';
import Navbar from './components/navbar';

function App() {

  let id = useRef(3); 

  const [state, setState] = useState({
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

  const handleDecrement = (habit) => {
    const habits = [...state.habits];
    const index = habits.indexOf(habit);
    let count = habits[index].count
    habits[index].count = count > 1 ? count -1 : 0;
    setState({habits});
  }

  const handleDelete = (habit) => {
    const habits = state.habits.filter((item)=>habit.id!==item.id)
    setState({habits});
  }

  const handleAdd = (inputContent) => {
    const habits = [...state.habits, { id:++id.current, name:inputContent, count:0 }]
    setState({habits});
  }

  const handleReset = () => {
    const habits = state.habits.map((habit)=>{habit.count=0
    return habit;})
    setState({habits});
  }

  return (
  <>
  <Navbar 
  totalCount={state.habits.filter(habit => habit.count > 0).length}
  />
  <Habits 
  habits={state.habits}
  onIncrement={handelIncrement}
  onDecrement={handleDecrement}
  onDelete={handleDelete}
  onAdd={handleAdd}
  onReset={handleReset}
  />
  </>
  )
}

export default App;