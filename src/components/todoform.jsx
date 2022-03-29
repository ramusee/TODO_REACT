import React from 'react';
import { useState } from 'react';

function TodoForm({ onInputValue }) {
  const [inputValue, setInputValue] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onInputValue(e.target[0].value);
    setInputValue('');
  }
  function onChange(e) {
    setInputValue(e.target.value);
  }
  return (
    <form className="todo__add-task" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo__task-value"
        placeholder="Add task"
        value={inputValue}
        onChange={onChange}
      />
      <input className="button button_add" type="submit" value="" />
    </form>
  );
}

export default TodoForm;
