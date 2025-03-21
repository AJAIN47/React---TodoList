import "./TodoList.css"
import NewTodoForm from "./newTodoForm"
import TodoListItem from "./TodoListItem"
import { useSelector } from 'react-redux'
import { getCompletedTodos, getIncompleteTodos, getTodosLoading } from "./selectors"

export default function TodoList() {
  const todosAreLoading = useSelector(getTodosLoading);
  const completedTodos = useSelector(getCompletedTodos)
  const incompleteTodos = useSelector(getIncompleteTodos);
  return (
    <div>
      <h1>My List of Todos - Redux</h1>
      <NewTodoForm/>
      {todosAreLoading
        ? <p>Loading...</p>
        : (
          <>
      <h3>Completed List</h3>
      {completedTodos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id}/>
      ))}
      <h3>Incomplete List</h3>
      {incompleteTodos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id}/>
      ))}
      </>
        )}
    </div>
  )
}