import "./TodoList.css"
import NewTodoForm from "./newTodoForm"
import TodoListItem from "./TodoListItem"
import { useSelector } from 'react-redux'

export default function TodoList() {
  const todosAreLoading = useSelector(state => !state.loading.value.completed);
  const todos = useSelector(state => state.todos.value);
  const completedTodos = todos.filter(todo => todo.isCompleted);
  const incompleteTodos = todos.filter(todo => !todo.isCompleted);
  return (
    <div className="todo-list">
      <h1>My List of Todos - Redux</h1>
      <NewTodoForm/>
      {todosAreLoading
        ? <p>Loading...</p>
        : (
          <>
      <h3>Completed List</h3>
      {completedTodos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} className="todo-list-item"/>
      ))}
      <h3>Incomplete List</h3>
      {incompleteTodos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} className="todo-list-item"/>
      ))}
      </>
        )}
    </div>
  )
}