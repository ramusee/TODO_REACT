import React from 'react';
import { useState } from 'react';
import TodoForm from './todoform';
import TodoItem from './todoitem';

const tasks = [];
let count = 1;

function PriorityBlock({ priority }) {
  const [todos, setTodos] = useState(tasks);

  function setNewTask(newTaskTitle) {
    const newTask = {
      id: count,
      title: newTaskTitle,
      completed: false,
    };
    setTodos([...todos, newTask]);
    count++;
  }
  function handleInputValue(taskValue) {
    setNewTask(taskValue);
  }
  function onToggle(id) {
    setTodos(
      todos.map((todo) => {
        if (id === todo.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }
  function handleDeleteTask(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  return (
    <section className="priority">
      <span className="priority__title">{priority}</span>
      <TodoForm onInputValue={handleInputValue} />
      <div className="todo__tasks">
        {todos.map((todo) => (
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
