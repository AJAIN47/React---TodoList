import "./TodoListItem.css"
import { useDispatch } from "react-redux"
import { markAsCompleted } from "./thunks"
import { deleteTodo } from "./thunks"

export default function TodoListItem({todo}) {

  const dispatch = useDispatch();

  return (
    <div className="todo-list-item">
      <h3 className="todo-text">{todo.text}</h3>
      {todo.isCompleted && <p className="todo-status">Complete!</p>}
      {todo.isCompleted ? (
        <button className="delete-button" onClick={() => dispatch(deleteTodo(todo.id))}>Delete Item!</button>
      ) : (
        <button className="complete-button" onClick={() => dispatch(markAsCompleted(todo.id))}>Mark as Completed</button>
      )}
    </div>
  )
}