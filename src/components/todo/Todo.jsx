import React from 'react';
import './Todo.css';

export default function Todo(props) {
  // Props
  const {todo,prevTodos,stateControll} = props
  // Methods
  const save = todos => localStorage.setItem("todos",JSON.stringify(todos));

  const deleteTodo = ()=>{
    const newTodos = prevTodos.filter(element => element.id !== todo.id );
    stateControll(newTodos);
    save(newTodos);
  }
  return (
    <div className="task">
      <p>{todo.content}</p>
      <ul>
        {/* <li><i className="fas fa-clipboard-check"></i></li> */}
        {/* <li><i className="fas fa-edit"></i></li> */}
        <li onClick={deleteTodo} id={todo.id}><i className="fas fa-trash-alt"></i></li>
      </ul>
    </div>
  )
}