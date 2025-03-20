import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "./thunks";

export default function NewTodoForm() {
  const [inputText, setInput] = useState('');
  const dispatch = useDispatch();
  return (
    <div>
      <input type="text" value={inputText}
      onChange={e => setInput(e.target.value)}/>
      <button onClick={() => {
        dispatch(createTodo(inputText));
        setInput('')
      }}>Create Todo Item</button>
    </div>
  )
}