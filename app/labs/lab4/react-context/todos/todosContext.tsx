"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type Todo = {
  id: string;
  description: string;
};

// Define the context state
interface TodosContextState {
  todos: Todo[];
  currentTodo: Todo;
  setCurrentTodo: (todo: Todo) => void;
  addTodo: (description: string) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (todo: Todo) => void;
}

// Create the context
const TodosContext = createContext<TodosContextState | undefined>(undefined);

// Create the provider component
export const TodosProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", description: "todo 1" },
    { id: "2", description: "todo 2" },
  ]);

  const [currentTodo, setCurrentTodo] = useState<Todo>({
    id: "-1",
    description: "",
  });

  const addTodo = (description: string) => {
    setTodos([...todos, { id: new Date().getTime().toString(), description }]);
    setCurrentTodo({ ...currentTodo, description: "" });
  };

  const deleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (todo: Todo) => {
    setTodos((prevTodos) =>
      prevTodos.map((t) =>
        t.id === todo.id ? { ...t, description: todo.description } : t,
      ),
    );
    setCurrentTodo({ ...currentTodo, description: "" });
  };

  const value: TodosContextState = {
    todos,
    currentTodo,
    setCurrentTodo,
    addTodo,
    deleteTodo,
    updateTodo,
  };

  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
};

// Create a custom hook to use the Todos context
export const useTodos = () => {
  const context = useContext(TodosContext);
  return context;
};
