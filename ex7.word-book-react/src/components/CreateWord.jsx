import React, { useRef } from 'react';
import useFetch from '../hooks/useFetch';
import { useNavigate } from 'react-router'


const CreateWord = () => {
  const days = useFetch("http://localhost:3001/days");
  const navigate = useNavigate();

  function onSubmit(e) {
    e.preventDefault();

    console.log(dayRef.current.value)

    fetch(`http://localhost:3001/words/`, {
      method : 'POST',
      headers : {
        'Content-type' : 'application/json',
      },
      body : JSON.stringify({
        day : dayRef.current.value,
        eng : engRef.current.value,
        kor : korRef.current.value,
        isDone : false
      }),
    }).then(res => {
      if (res.ok) {
        alert("생성이 완료 됨")
        navigate(`/day/${dayRef.current.value}`);//이 앞에 /붙이냐 안붙히냐에 따라 동작 완전달라짐
      }
    });
  }
  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);
  
  return (
  <form onSubmit={onSubmit}>
    <div className='input_area'>
      <label>Eng</label>
      <input type="text" placeholder='computer' ref={engRef}/>
    </div>
    <div className='input_area'>
      <label>Kor</label>
      <input type="text" placeholder='컴퓨터' ref={korRef}/>
    </div>
    <div className='input_area'>
      <label>Day</label>
      <select ref={dayRef}>
        {days.map(day => {
          return <option key={day.id} value={day.day} >{day.day}</option>
        })}
      </select>
    </div>
    <button>Save</button>
  </form>
  );
}

export default CreateWord;