import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../featurs/TodoSlice";

export default configureStore({
  reducer: {
    todos: TodoReducer,
  },
});
