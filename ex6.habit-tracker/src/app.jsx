import React, { useState, useRef, useCallback } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

const App = () => {
  const id = useRef(3);
  const [state, setState] = useState({
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  });

  const handleIncrement = habit => {
    const habits = state.habits.map(item => {
      if (item.id === habit.id) {
        return {...habit, count: habit.count + 1};
      }
      return item;
    });
    setState({ habits });
  };

  const handleDecrement = habit => {
    const habits = state.habits.map(item => {
      const count = habit.count;
      if (habit.id === item.id) {
        return {...habit, count: count > 0 ? count - 1 : 0}
      }
      return item;
    });
    setState({ habits });
  };

  const handleDelete = habit => {
    const habits = state.habits.filter(item => item.id !== habit.id);
    setState({ habits });
  };

  const handleAdd = name => {
    const habits = [...state.habits, { id:++id.current, name, count: 0 }];
    setState({ habits });
  };

  const handleReset = () => {
    const habits = state.habits.map(habit => {
      if (habit.count !== 0){
        return {...habit, count: 0}
      }
      return habit;
    });
    setState({ habits });
  };

  return (
    <>
      <Navbar
        totalCount={state.habits.filter(item => item.count > 0).length}
      />
      <Habits
        habits={state.habits}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
        onAdd={handleAdd}
        onReset={handleReset}
      />
    </>
  );
};
export default App;