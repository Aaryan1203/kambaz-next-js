import { ListGroupItem, Button, FormControl } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { setTodo, updateTodo, addTodo } from "./todosReducer";

export default function TodoForm() {
  const { todo } = useSelector((state: RootState) => state.todosReducer);
  const dispatch = useDispatch();

  return (
    <ListGroupItem>
      <div className="d-flex gap-2">
        <FormControl
          value={todo.title}
          onChange={(e) =>
            dispatch(setTodo({ ...todo, title: e.target.value }))
          }
        />
        <Button
          onClick={() => dispatch(updateTodo(todo))}
          id="wd-update-todo-click"
          className="btn-warning"
        >
          Update
        </Button>
        <Button
          onClick={() => dispatch(addTodo(todo))}
          id="wd-add-todo-click"
          className="btn-success"
        >
          Add
        </Button>
      </div>
    </ListGroupItem>
  );
}
