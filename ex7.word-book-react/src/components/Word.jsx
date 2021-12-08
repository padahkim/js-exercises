import React, {useState} from 'react';

const Word = ({word}) => {
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);

  function toggleShow() {
    setIsShow(!isShow);//처음에 isShow = false   토글 클릭하는 순간 !isShow = false 같다 isShow = true
  }

  function toggleDone() {
    setIsDone(!isDone);
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
        <button className="btn_del">삭제</button>
      </td>
    </tr>
  );
}

export default Word;