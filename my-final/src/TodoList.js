import { useState } from "react";
import React from "react";

export default function TodoList({ todos, onChangeTodo, onDeleteTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <List todo={todo} onChange={onChangeTodo} onDelete={onDeleteTodo} />
        </li>
      ))}
    </ul>
  );
}

function List ({ todo, onChange, onDelete }) {
  const [current] = useState('');
  let todoContent;
  if (current) {
    todoContent = (
      <>
        <input
          value={todo.title}
          onChange={(e) => {
            onChange({
              ...todo,
              title: e.target.value,
              description: e.target.value
            });
          }}
        />
       
      </>
    );
  } else {
    todoContent = (
      <>
        {todo.title}: {todo.description}
        
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={(e) => {
          onChange({
            ...todo,
            completed: e.target.checked
          });
        }}
      />
      {todoContent}
      <button onClick={() => onDelete(todo.id)}>Remove Item</button>
    </label>
  );
}
