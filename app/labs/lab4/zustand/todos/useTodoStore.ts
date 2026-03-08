import { create } from "zustand";

type Todo = {
  id: string;
  description: string;
};

// Define the Todos state
interface TodosState {
  todos: Todo[];
  addTodo: (description: string) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (todo: Todo) => void;
}

// Use create function to create a hook giving us access to the state
export const useTodosStore = create<TodosState>((set) => ({
  todos: [
    { id: "1", description: "todo 1" },
    { id: "2", description: "todo 2" },
  ],
  addTodo: (description: string) =>
    set((state) => ({
      todos: [
        ...state.todos,
        { id: new Date().getTime().toString(), description },
      ],
      currentTodo: { id: "-1", description: "" },
    })),
  deleteTodo: (id: string) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
  updateTodo: (todo: Todo) =>
    set((state) => ({
      todos: state.todos.map((t) => (t.id === todo.id ? todo : t)),
      currentTodo: { id: "-1", description: "" },
    })),
}));
