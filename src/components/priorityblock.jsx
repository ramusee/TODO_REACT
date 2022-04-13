import React from 'react';
import TodoForm from './todoform';
import TodoItem from './todoitem';
import {useDispatch, useSelector} from "react-redux";
import {addTodo, removeTodo, toggleTodo} from "../store/actions";

function PriorityBlock({priority}) {
  const dispatch = useDispatch()
  const todos = useSelector(state => state.repos)

  function handleAddTodo(taskTitle, priority) {
    dispatch(addTodo(taskTitle, priority))
  }

  function handleDeleteTask(id) {
    dispatch(removeTodo(id))
  }

  function onToggle(id) {
    dispatch(toggleTodo(id))
  }

  return (
    <section className="priority">
      <span className="priority__title">{priority}</span>
      <TodoForm
        onHandleAddTodo={handleAddTodo}
        priority={priority}
      />
      <div className="todo__tasks">
        {todos.filter(todo => priority === todo.priority).map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDeleteTask={handleDeleteTask}
          />
        ))}
      </div>
    </section>
  );
}

export default PriorityBlock;
