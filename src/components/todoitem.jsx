import React from 'react';
import {removeTodo, toggleTodo} from "../store/actions";
import {useDispatch} from "react-redux";

function TodoItem({todo}) {
  const dispatch = useDispatch()
  const classes = ['task__text'];
  if (todo.completed) {
    classes.push('todo__task_done')
  }

  return (
    <div className="todo__task">
      <input
        className="task__check-input"
        type="checkbox"
        onChange={() => dispatch(toggleTodo(todo.id))}
        checked={todo.completed}
      />
      <span className="task__checkbox"/>
      <p className={classes.join(' ')}>{todo.title}</p>
      <div className="task__container">
        <span className="task__date">{todo.date}</span>
        <button
          className="button button_del"
          type="button"
          onClick={() => dispatch(removeTodo(todo.id))}
        />
      </div>
    </div>
  );
}

export default TodoItem;
