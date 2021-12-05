import React, { Component } from 'react'
import Habit from './habit'

class Habits extends Component {


  render() {
    return (
      <ul>
        {
          this.props.habits.map((habit)=>(
            <Habit 
            key={habit.id} 
            habit={habit}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            onDelete={this.props.onDelete}
            />))
        }
      </ul>
    )
  }
}

export default Habits;

// this.state.habit.map(()=><Habit key={this.state.habit.id} name={this.state.habit.title}/> 나의뇌절코딩