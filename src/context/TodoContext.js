import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todoMsg: "Hello g",
      completed: false,
    },
  ],
  addTodo: (todoMsg) => {},
  editTodo: (id, todoMsg) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export default function useTodo() {
  return useContext(TodoContext);
}
