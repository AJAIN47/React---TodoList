import "./TodoListItem.css"

export default function TodoListItem({todo, onCompletedClicked, onDeleteClicked}) {
  return (
    <div className="todo-list-item">
      <h3 className="todo-text">{todo.text}</h3>
      {todo.isCompleted && <p className="todo-status">Complete!</p>}
      {todo.isCompleted ? (
        <button className="delete-button" onClick={() => onDeleteClicked(todo.text)}>Delete Item!</button>
      ) : (
        <button className="complete-button" onClick={() => onCompletedClicked(todo.text)}>Mark as Completed</button>
      )}
    </div>
  )
}