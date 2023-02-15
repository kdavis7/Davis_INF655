
import './index.css';
import { useState } from "react";
import TodoList from './TodoList';
import AddTodo from './TodoForm.js';


let tId = 4;
const myTodos = [
  { id: 0, title: "Do Laundry", description: "Make sure there are clean clothes for the weekend.", completed: false },
  { id: 1, title: "Dogs", description: "Take them to Daycare.", completed: false },
  { id: 2, title: "Prep Dinner", description: "Get out Chicken to thaw and cook rice.", completed: false },
  {id: 3, title: "Go out", description: "Get some fresh air.", completed: false }
];

export default function TodoApp() {
  const [todos, setTodos] = useState(myTodos);
  

  function handleAdditions(title, description) {
    setTodos([
      ...todos,
      {
        id: tId++,
        title: title,
        description: description,
        completed: false
      }
    ]);
  }

  function handleChanges(nextTodo) {
    setTodos(
      todos.map((t) => {
        if (t.id === nextTodo.id) {
          return nextTodo;
        } else {
          return t;
        }
      })
    );
  }


//ensure deleted state is replaced and not mutated.
  function handleDeleteTodo(todoId) {
    setTodos(todos.filter((t) => t.id !== todoId));
  }

  return (
    <>
      <AddTodo onAddTodo={handleAdditions} />
      <TodoList
        todos={todos}
        onChangeTodo={handleChanges}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}

