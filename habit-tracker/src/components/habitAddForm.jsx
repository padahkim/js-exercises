import React, { Component } from 'react'

class HabitAddForm extends Component {
  formRef = React.createRef();
  inputRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();
    const inputContent = this.inputRef.current.value;
    inputContent && this.props.onAdd(inputContent);
    this.formRef.current.reset();
  }

  render() {
    return (
      <form className="add-form"  onSubmit={this.onSubmit} ref={this.formRef}>
        <input 
        type="text" 
        className="add-input" 
        placeholder="Habit" 
        ref={this.inputRef}
      />
        <button className="add-button">Add</button>
      </form>
    )
  }
}

export default HabitAddForm;