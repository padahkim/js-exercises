import React, {useRef} from 'react'

function HabitAddForm(props) {
  const inputRef = useRef();
  const formRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const inputContent = inputRef.current.value;
    inputContent && props.onAdd(inputContent);
    formRef.current.reset();
  }

  return (
    <>
    <form className="add-form" onSubmit={onSubmit} ref={formRef}>
      <input 
      type="text" 
      className="add-input" 
      placeholder="Add your habit" 
      ref={inputRef}
      />
      <button className="add-button">Add</button>
    </form>
    </>
  )
}

export default HabitAddForm;
