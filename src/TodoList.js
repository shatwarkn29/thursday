import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const addTodo = () => {
    if (task.trim() !== '') {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className='todolist'>
      <h1>Todo List </h1>
      <div className='thing'>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTodo}>Add the Task</button>
      </div>
      <div className='hover'> 
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <div className='lock'>
                <button onClick={() => removeTodo(index)}>Removing the task</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
