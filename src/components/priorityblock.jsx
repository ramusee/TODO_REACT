import React from 'react';
import TodoForm from './todoform';
import TodoItem from './todoitem';
import {useSelector} from "react-redux";
import storage from "../localStorage";

function PriorityBlock({priority}) {
  const todos = useSelector(state => state.repos)
  storage.saveTodos(todos)

  return (
    <section className="priority">
      <span className="priority__title">{priority}</span>
      <TodoForm
        priority={priority}
      />
      <div className="todo__tasks">
        {todos.filter(todo => priority === todo.priority).map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
          />
        ))}
      </div>
    </section>
  );
}

export default PriorityBlock;
