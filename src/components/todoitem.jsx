import React from 'react';
import { format } from 'date-fns';

function TodoItem({ todo, onToggle, onDeleteTask }) {
  const classes = ['task__text'];
  if (todo.completed) {
    classes.push('todo__task_done');
  }
  const date = format(new Date(), 'dd.MM.yyyy');
  return (
    <div className="todo__task">
      <input
        className="task__check-input"
        type="checkbox"
        onChange={() => onToggle(todo.id)}
        checked={todo.completed}
      />
      <span className="task__checkbox"></span>
      <p className={classes.join(' ')}>{todo.title}</p>
      <div className="task__container">
        <span className="task__date">{date}</span>
        <button
          className="button button_del"
          type="button"
          onClick={() => onDeleteTask(todo.id)}
        ></button>
      </div>
    </div>
  );
}

export default TodoItem;
