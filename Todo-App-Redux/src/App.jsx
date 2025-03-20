import './App.css'
import TodoList from './TodoList'
import { loadTodos } from './thunks'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodos());
  }, []);
return (
    <>
      <TodoList >
      </TodoList>
    </>
  )
}

export default App
