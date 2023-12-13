import React, { useState } from 'react';

const TodoItem = ({ text, onRemove }) => {
  const [completed, setCompleted] = useState(false);

  const handleToggle = () => {
    setCompleted(!completed);
  };

  const handleRemove = () => {
    onRemove();
  };

  return (
    <div
      style={{
        textDecoration: completed ? 'line-through' : 'none',
        color: completed ? 'gray' : 'black',
        cursor: 'pointer',
      }}
      onClick={handleToggle}
    >
      <span>{text}</span>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default TodoItem;
