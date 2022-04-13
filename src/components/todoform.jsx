import React from 'react';
import {useState} from 'react';

function TodoForm({onHandleAddTodo, priority}) {
  const [inputValue, setInputValue] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onHandleAddTodo(e.target[0].value, priority);
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
      <input className="button button_add" type="submit" value=""/>
    </form>
  );
}

export default TodoForm;
