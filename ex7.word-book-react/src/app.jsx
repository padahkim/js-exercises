import React from 'react';
import DayList from './components/DayList';
import Header from './components/Header';
import Day from './components/Day';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import EmptyPage from './components/EmptyPage';
import CreateWord from './components/CreateWord';
import CreateDay from './components/CreateDay';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<DayList/>} />
          <Route path="/day/:day" element={<Day/>} />
          <Route path="/create_word" element={<CreateWord/>}/>
          <Route path="/*" element={<EmptyPage/>} />
          <Route path="/create_day" element={<CreateDay/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;