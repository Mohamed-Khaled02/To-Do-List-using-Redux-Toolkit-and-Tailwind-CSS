import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const getInitialState = () => {
  const storedTodos = localStorage.getItem("todos");
  if (storedTodos) {
    return JSON.parse(storedTodos);
  }
  return [];
};

const initialState = getInitialState();

const TodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todos = {
        text: action.payload,
        id: uuid(),
        complete: false,
      };
      state.push(todos);
      localStorage.setItem("todos", JSON.stringify(state));
    },
    deleteTodo: (state, action) => {
      const newState = state.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(newState));
      return newState;
    },
    toggleComplete: (state, action) => {
      const todo = state.find((t) => t.id === action.payload);
      if (todo) {
        const newState = state.map((t) =>
          t.id === todo.id ? { ...t, complete: !t.complete } : t
        );
        localStorage.setItem("todos", JSON.stringify(newState));
        return newState;
      }
      return state;
    },
  },
});

export const { addTodo, deleteTodo, toggleComplete } = TodoSlice.actions;
export default TodoSlice.reducer;
