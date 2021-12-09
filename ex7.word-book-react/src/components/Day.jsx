import { useParams } from 'react-router';
import Word from './Word';
import { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';

export default function Day() {
  const { day } = useParams();
  const words = useFetch(`http://localhost:3001/words?day=${day}`);
/* 
  const [words, setWords] = useState([])
  useEffect(() => {
    fetch(`http://localhost:3001/words?day=${day}`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      setWords(data)
    });
  }, [day]);
 */
  return (
  <>
  <h2>Day {day}</h2>
  <table>
    <tbody>
      {words.map(word => <Word word={word} key={word.id}/>)}
    </tbody>
  </table>
  </>
  );

}

/* 저짝에서  {word} = props.word 
          props = {word:word}
let user = {name: 'Kim', age:30};
let {name, age} = user; //let name = user.name  // let age = user.age    {word} = props.word// props = {word:word } */