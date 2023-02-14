import React from "react";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <Header />
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
