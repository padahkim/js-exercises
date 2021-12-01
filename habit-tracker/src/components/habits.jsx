import React, { Component } from 'react';
import Habit from './habit'

class Habits extends Component {
  handleIncrement = (element) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(element);
    habits[index].count++;
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count;
    //habits[index].count > 0 ? habits[index].count -1 : 0;
    //habits[index].count = habits[index].count > 0 ? habits[index].count - 1 : 0;
    habits[index].count = count > 0 ? count - 1 : 0;
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter(item=>item.id !== habit.id)
    /*  let habits = [...this.state.habits];
    const index = habits.indexOf(habit,1);
    habits = habits.splice(index,2)  */
    this.setState( { habits } );
  };

  state = {
    habits:[
      { id:1, name: 'Reading', count: 0 },
      { id:2, name: 'Running', count: 0 },
      { id:3, name: 'Coding', count: 0 },
    ],
  };
  render() {
    return (
    <ul>
      {this.state.habits.map(habit => (//habits []의 각 엘리먼트를 <Habit/>으로 변환 한 배열을 리턴
        <Habit 
          key={habit.id} 
          habit={habit} 
          onIncrement={this.handleIncrement} 
          onDecrement={this.handleDecrement} 
          onDelete={this.handleDelete}
          />
        ))}
    </ul>
    );
  }
}


export default Habits;