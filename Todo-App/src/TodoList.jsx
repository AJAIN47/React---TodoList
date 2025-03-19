import NewTodoForm from "./newTodoForm"
import TodoListItem from "./TodoListItem"

export default function TodoList({completedTodos, incompleteTodos, onCompletedClicked, onDeleteClicked, onCreateClicked}) {
  return (
    <div>
    <h1>My List of Todos - Alish</h1>
    <NewTodoForm onCreateClicked={onCreateClicked}/>
    <h3>Completed List</h3>
    {completedTodos.map((todo, index) => (
      <TodoListItem todo={todo} key={index} onDeleteClicked={onDeleteClicked}/>
    ))}
    <h3>Incomplete List</h3>
    {incompleteTodos.map((todo, index) => (
      <TodoListItem todo={todo} key={index} onCompletedClicked={onCompletedClicked}/>
    ))}
    </div>
    
  )
}