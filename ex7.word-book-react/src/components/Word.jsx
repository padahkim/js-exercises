//{word}를 props로 바꿧는데,, word를 어떻게 사용하고 있는거지??//state로 넣어주고있슴,,인자로 넘어오는걸 바로 스테이트로 넣어서도 사용가능하구나,,,
//pros로 넘겨주는거랑 id===0일 때 return null 하는부분 모르겟.,,,
import React, {useState} from 'react';

const Word = ({word: w}) => {
  const [word, setWord] = useState(w)
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);

  function toggleShow() {
    setIsShow(!isShow);//처음에 isShow = false   토글 클릭하는 순간 !isShow = false 같다 isShow = true
  }

  function toggleDone() {
    //setIsDone(!isDone);
    fetch(`http://localhost:3001/words/${word.id}`, {
      method : 'PUT',
      headers : {
        'Content-type' : 'application/json',
      },
      body : JSON.stringify({
        ...word,
        isDone : !isDone
      }),
    }).then(res => {
      if (res.ok) {
        setIsDone(!isDone);
      }
    });
  }

  function del() {
    if (window.confirm('진짜 삭제 하실?'))
    fetch(`http://localhost:3001/words/${word.id}`, {
      method : 'DELETE',
  }).then(res => {
    if (res.ok) {
      setWord({ id: 0 });
    }
  });
}

if (word.id === 0) {
  return null;
} 

  return (
    <tr className={isDone ? "off" : ""}>
      <td>
        <input type="checkbox" checked={isDone} onChange={toggleDone}/>
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <button onClick={toggleShow}>뜻 {isShow === false ? '보기':'숨김'}</button>
        <button onClick={del} className="btn_del">삭제</button>
      </td>
    </tr>
  );
}

export default Word;