import { useState } from 'react';
import { format } from 'date-fns';
import './App.css';

const PRIORITY = {
  HIGH: 'high',
  LOW: 'low',
};

const tasks = [];
let count = 1;

function App() {
  return (
    <div className="todo">
      <PriorityBlock priority={PRIORITY.HIGH} />
      <PriorityBlock priority={PRIORITY.LOW} />
    </div>
  );
}

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

export default App;
