import { useState } from 'react'
import './App.css'
import TodoList from './TodoList'

function App() {
  const [completedTodos, setCompletedTodos] = useState([
    {text: 'Take out Garbage', isCompleted: true},
    {text: 'Make dinner', isCompleted: true}
  ]);
  const [incompletedTodos, setIncompleteTodos] = useState([
    {text: 'Paint the house', isCompleted: false}
  ]);

  function markTodoAsComplete(text) {
    setIncompleteTodos(incompletedTodos.filter(t => t.text !== text ));
    setCompletedTodos([...completedTodos, {...incompletedTodos.find(t => t.text === text), isCompleted : true}])
  }
  function markTodoAsDelete(text) {
    setCompletedTodos(completedTodos.filter(t=> t.text !== text))
  }

  function createTodo(text) {
    setIncompleteTodos([...incompletedTodos, {text , isCompleted:false}])
  }
  

  return (
    <>
      <TodoList 
      completedTodos={completedTodos} 
      incompleteTodos={incompletedTodos}
      onCompletedClicked={markTodoAsComplete}
      onDeleteClicked={markTodoAsDelete}
      onCreateClicked={createTodo}>
      </TodoList>
    </>
  )
}

export default App
