import React from 'react';
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function App() {
  return <div className="p-4">
      <TodoForm />
    <div className="mt-4">
      <TodoList />
    </div>
  </div>
}

