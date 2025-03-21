import "./TodoListItem.css"
import { useDispatch } from "react-redux"
import { markAsCompleted } from "./thunks"
import { deleteTodo } from "./thunks"
import styled from "styled-components"

const getBackgroundColor = (props) => {
  if (props.important) {
    return 'background-color: lightgreen;'
  } else if(props.notImportant) {
    return 'background-color: lightcoral;'
  }
}

const CardContainer = styled.div`
${getBackgroundColor}
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(0,0,0,0.1);
  padding: 10px;
`

export default function TodoListItem({todo}) {

  const dispatch = useDispatch();

  return (
    <CardContainer important={todo.isCompleted} notImportant={!todo.isCompleted}>
      <h3>{todo.text}</h3>
      {todo.isCompleted && <p>Complete!</p>}
      {todo.isCompleted ? (
        <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete Item!</button>
      ) : (
        <button onClick={() => dispatch(markAsCompleted(todo.id))}>Mark as Completed</button>
      )}
    </CardContainer>
  )
}