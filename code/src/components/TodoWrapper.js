import React, { useState, useEffect } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForm";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const [seachValue, setSeachValue] = useState("");

  useEffect(() => {
    if (todos.length === 0) {
      // cud - saveToLocalStorage(todos);
      // read - getlocalStorage()
      // const localData = getlocalStorage()
      // setTodos(JSON.parse(localData));
    }
  },[]);
  
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(),  isEditing: false, ...todo },
    ]);
  }

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  const editTask = (todo) => {
    setTodos(
      todos.map((td) =>
        td.id === todo.id ? { ...td, isEditing: !td.isEditing, title: todo.title, description: todo.description } : td
      )
    );
  }

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <h1>Get Things Done !</h1>
      <TodoForm addTodo={addTodo} />
      <input
        type="text"
        value={seachValue}
        onChange={(e) => setSeachValue(e.target.value)}
        className="todo-input"
        placeholder="Search..."
      />
      {/* display todos */}
      {todos.map((todo) =>
      {
        // if todo title is not
        if (seachValue && !todo.title.toLowerCase().includes(seachValue.toLowerCase())) {
          return null;
        }
        return todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      }

      )}
    </div>
  );
};