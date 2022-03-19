import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import './App.css';

const PRIORITY = {
  HIGH: 'high',
  LOW: 'low',
};

const tasks = [{id: 1, title: 'Make this todo', completed: false,}];

function App() {
  return (
    <div className="todo">
      <PriorityBlock priority={PRIORITY.HIGH} />
      <PriorityBlock priority={PRIORITY.LOW} />
    </div>
  );
}

function PriorityBlock(props) {
  const [todos, setTodos] = useState(tasks);
  const priority = props.priority

  
  return (
    <section className="priority">
      <span className="priority__title">{priority}</span>
      <ValueInput todos={todos}/>
      <div className="todo__tasks">
        {todos}
      </div>
    </section>
  );
}
function ValueInput(props) {
  function handleFormSubmit(e) {
    e.preventDefault();
  }
  function handleInputChange(e) {
   
  }
  return (
    <form className="todo__add-task" onSubmit={handleFormSubmit}>
      <input
        name="isDone"
        type="text"
        value=''
        className="todo__task-value"
        // onChange={}
        placeholder="Add task"
      />
      <input className="button button_add" type="submit"/>
    </form>
  );
}

function TodoItem(props) {
  const date = format(new Date(), 'dd.MM.yyyy');

  return (
    <div className="todo__task">
      <input className="task__check-input" type="checkbox" />
      <span className="task__checkbox"></span>
      <p className="task__text"></p>
      <div className="task__container">
        <span className="task__date">{date}</span>
        <button className="button button_del" type="button"></button>
      </div>
    </div>
  );
}






export default App;
