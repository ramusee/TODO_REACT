import React from 'react';
import {useState} from 'react';
import {useDispatch} from "react-redux";
import {format} from "date-fns";
import {addTodo} from "../store/actions";

function TodoForm({priority}) {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault();
    const title = e.target[0].value
    if (!title) return
    const date = format(new Date(), 'dd.MM.yyyy');
    dispatch(addTodo(title, priority, date));
    setInputValue('');
  }

  return (
    <form className="todo__add-task" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo__task-value"
        placeholder="Add task"
        value={inputValue}
        onChange={(e)=> setInputValue(e.target.value)}
      />
      <input className="button button_add" type="submit" value=""/>
    </form>
  );
}

export default TodoForm;
