import "./TodoList.css"
import NewTodoForm from "./newTodoForm"
import TodoListItem from "./TodoListItem"

export default function TodoList({completedTodos, incompleteTodos, onCompletedClicked, onDeleteClicked, onCreateClicked}) {
  return (
    <div className="todo-list">
      <h1>My List of Todos - Redux</h1>
      <NewTodoForm onCreateClicked={onCreateClicked}/>
      <h3>Completed List</h3>
      {completedTodos.map((todo, index) => (
        <TodoListItem todo={todo} key={index} onDeleteClicked={onDeleteClicked} className="todo-list-item"/>
      ))}
      <h3>Incomplete List</h3>
      {incompleteTodos.map((todo, index) => (
        <TodoListItem todo={todo} key={index} onCompletedClicked={onCompletedClicked} className="todo-list-item"/>
      ))}
    </div>
  )
}