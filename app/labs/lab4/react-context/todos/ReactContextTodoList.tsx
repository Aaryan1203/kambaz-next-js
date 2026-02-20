"use client";
import { Button, FormControl, ListGroup, ListGroupItem } from "react-bootstrap";
import { useTodos } from "./todosContext";

export default function TodosContext() {
  const {
    todos,
    currentTodo,
    setCurrentTodo,
    addTodo,
    deleteTodo,
    updateTodo,
  } = useTodos()!;

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
              onClick={() => updateTodo(currentTodo)}
              id="wd-update-todo-click"
              className="btn-warning"
            >
              Update
            </Button>
            <Button
              onClick={() => addTodo(currentTodo.description)}
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
