import { useState } from "react";
export default function NewTodoForm({ onCreateClicked }) {
  const [inputText, setInput] = useState('');
  return (
    <div>
      <input type="text" value={inputText}
      onChange={e => setInput(e.target.value)}/>
      <button onClick={() => {
        onCreateClicked(inputText);
        setInput('')
      }}>Create Todo Item</button>
    </div>
  )
}