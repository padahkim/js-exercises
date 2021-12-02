import React, { PureComponent } from 'react';

class Input extends PureComponent {
  formRef = React.createRef();
  inputRef = React.createRef();

  onSubmit = event=> {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.inputRef.current.value='';
    this.formRef.current.reset();
  }



  render() {
    return (
      <form 
        className="add-form" 
        onSubmit={this.onSubmit}
        ref={this.formRef}
        >
        <input 
          type="text" 
          placeholder="Habit"
          className="Habit"
          ref={this.inputRef}
          />
        <button className="add-button">Add</button>
      </form>
    )
  }
}


export default Input;