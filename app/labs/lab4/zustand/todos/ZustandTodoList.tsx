"use client";
import { Button, FormControl, ListGroup, ListGroupItem } from "react-bootstrap";
import { useTodosStore } from "./useTodoStore";
import { describe } from "node:test";
import { useState } from "react";
import { Todo } from "../../react-context/todos/todosContext";

export default function ZustandTodos() {
  const { todos, addTodo, deleteTodo, updateTodo } = useTodosStore(
    (state) => state,
  );

  const [currentTodo, setCurrentTodo] = useState<Todo>({
    id: "0",
    description: "",
  });

  return (
    <div id="wd-counter-context">
      <h2>Todo List</h2>
      <ListGroup>
        <ListGroupItem>
          <div className="d-flex gap-2">
            <FormControl
              value={currentTodo.description}
              onChange={(e) =>
                setCurrentTodo({ ...currentTodo, description: e.target.value })
              }
            />
            <Button
              onClick={() => {
                updateTodo(currentTodo);
                setCurrentTodo({ id: "0", description: "" });
              }}
              id="wd-update-todo-click"
              className="btn-warning"
            >
              Update
            </Button>
            <Button
              onClick={() => {
                addTodo(currentTodo.description);
                setCurrentTodo({ id: "0", description: "" });
              }}
              id="wd-add-todo-click"
              className="btn-success"
            >
              Add
            </Button>
          </div>
        </ListGroupItem>
        {todos.map((todo: any) => (
          <ListGroupItem
            key={todo.id}
            className="d-flex justify-content-between align-items-center"
          >
            {todo.description}
            <div className="d-flex gap-2">
              <Button
                onClick={() => setCurrentTodo(todo)}
                id="wd-set-todo-click"
              >
                Edit
              </Button>
              <Button
                onClick={() => deleteTodo(todo.id)}
                id="wd-delete-todo-click"
                className="btn-danger"
              >
                Delete
              </Button>
            </div>
          </ListGroupItem>
        ))}
      </ListGroup>
      <hr />
    </div>
  );
}
