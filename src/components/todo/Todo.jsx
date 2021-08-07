import React from 'react';
import './Todo.css';

export default function Todo(props) {
  // Props
  let {todo,prevTodos,stateControll} = props
  // Vars
  let contentStyle = (todo.done) ? {textDecoration: "line-through"}:{textDecoration: "none"};
  // Methods
  const save = todos => localStorage.setItem("todos",JSON.stringify(todos));

  const deleteTodo = ()=>{
    const newTodos = prevTodos.filter(element => element.id !== todo.id );
    prevTodos = newTodos;
    stateControll(newTodos);
    save(newTodos);
  }
  
  const toggelCheckDone = ()=>{
    const newTodos = prevTodos.map(element => {
      if (element.id === todo.id) todo.done = !todo.done;
      return element;
    });
    prevTodos = newTodos;
    stateControll(newTodos);
    save(newTodos);
  }

  return (
    <div className="task">
      <p id={'content-'+todo.id} style={contentStyle}>{todo.content}</p>
      <ul>
        <li onClick={toggelCheckDone}><i className="fas fa-clipboard-check"></i></li>
        {/* <li><i className="fas fa-edit"></i></li> */}
        <li onClick={deleteTodo} id={todo.id}><i className="fas fa-trash-alt"></i></li>
      </ul>
    </div>
  )
}