import React, { useState } from 'react';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const handleRemove = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleToggle = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleAdd = (newTodo) => {
    setTodos([...todos, { text: newTodo, completed: false }]);
  };

  return (
    <div>
      <TodoInput onAdd={handleAdd} />
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          text={todo.text}
          completed={todo.completed}
          onToggle={() => handleToggle(index)}
          onRemove={() => handleRemove(index)}
        />
      ))}
    </div>
  );
};

export default TodoList;
