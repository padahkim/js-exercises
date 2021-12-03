import React, { Component } from 'react'
import Habit from './habit'

class Habits extends Component {

  state = {
    habits: [
    {id:1, title:"Reading", count: 0 },
    {id:2, title:"Working", count: 0 },
    {id:3, title:"Running", count: 0 }, 
    ],
  };

  render() {
    return (
      <ul>
        {
          this.state.habits.map((habit)=>{
            return <Habit key={habit.id} habit={habit}/>})
        }
      </ul>
    )
  }
}


export default Habits;

// this.state.habit.map(()=><Habit key={this.state.habit.id} name={this.state.habit.title}/> 나의뇌절코딩