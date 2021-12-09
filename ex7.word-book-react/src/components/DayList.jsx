import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import useFetch from "../hooks/useFetch";
//더미를 api로 바꿔주는 작업을 할 것임.

export default function DayList() {
  const days = useFetch("http://localhost:3001/days");
/*  
    const [days, setDays] = useState([]);
    useEffect(() => {
    fetch("http://localhost:3001/days")
    .then(res => {
      return res.json();
    })
    .then(data => {
      setDays(data)
    });
  }, []); */
  return (
    <ul className="list_day">
      {days.map(day=>(
        <li key={day.id}>
          <Link to={`/day/${day.day}`}> Day {day.day}</Link>
        </li>))}
    </ul>
  );
}
