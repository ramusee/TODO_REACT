import React from 'react';
import './App.css';
import PriorityBlock from './components/priorityblock';

const PRIORITY = {
  HIGH: 'high',
  LOW: 'low',
};

function App() {
  return (
    <div className="todo">
      <PriorityBlock priority={PRIORITY.HIGH} />
      <PriorityBlock priority={PRIORITY.LOW} />
    </div>
  );
}

export default App;
