import React, { useState } from 'react';

const TodoInput = ({ onAdd }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleAdd = () => {
    if (newTodo.trim() !== "") {
      onAdd(newTodo);
      setNewTodo("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="New ToDo"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default TodoInput;
