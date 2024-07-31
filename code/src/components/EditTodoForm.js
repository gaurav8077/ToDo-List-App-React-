import React, { useState } from 'react';

export const EditTodoForm = ({ editTodo, task }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo({
      ...task,
      title,
      description
    });
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="todo-input"
        placeholder="Update title"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="todo-input"
        placeholder="Update description"
      />
      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
};
