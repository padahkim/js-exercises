import React , { Component } from 'react';
import './app.css';
import Habits from'./components/habits'
import Navbar from './components/navbar';

class App extends Component {
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
    this.setState({habits});
  };
  handleDelete = (habit) => {
  /*  const habits = this.state.habits.filter((item)=>item === habit);
    this.setState({habits}) */
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const newHabits = habits.filter((habit)=>habit.id!==habits[index].id)  
    this.setState({habits:newHabits});
  };
  handleAdd = (inputContent) => {
    const habits = [...this.state.habits, {id:Date.now(), title:inputContent, count:0}]
    this.setState({habits});
  }
  handleReset = () => {
    const habits = [...this.state.habits].map((habit)=>{
      habit.count = 0; 
      return habit;
    });
    this.setState({habits});
  }


  render() {
    return (
      <>
      <Navbar
        totalCount={this.state.habits.filter((habit)=>habit.count > 0).length}
      />
      <Habits 
      onAdd={this.handleAdd}
      habits={this.state.habits}
      onIncrement={this.handleIncrement}
      onDecrement={this.handleDecrement}
      onDelete={this.handleDelete}
      onReset={this.handleReset}
      />
      </>
      )
  }
}

export default App;