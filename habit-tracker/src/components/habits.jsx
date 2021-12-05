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

  handleIncrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({habits});//{habits:habits}한거임
  };

  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count = habits[index].count >= 1 ? habits[index].count - 1 : 0;
    /* let count = habits[index].count;
    count = count >= 1 ? count - 1 : 0;  이건 안됨,,,*/ 
    this.setState({habits})
  };

  handleDelete = (habit) => {
  /*  const habits = this.state.habits.filter((item)=>item === habit);
    this.setState({habits}) */
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const newHabits = habits.filter((habit)=>habit.id!==habits[index].id)  
    this.setState({habits:newHabits})
  };

  render() {
    return (
      <ul>
        {
          this.state.habits.map((habit)=>(
            <Habit 
            key={habit.id} 
            habit={habit}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            />))
        }
      </ul>
    )
  }
}

export default Habits;

// this.state.habit.map(()=><Habit key={this.state.habit.id} name={this.state.habit.title}/> 나의뇌절코딩